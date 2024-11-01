import {
  createWorkLinksEl,
  createBonfireLinkEl,
  createComicsDialogButton,
  createComicsDialog,
  createComicStripElement,
} from './components';
import { ComicStrip, LinkList } from './types';
import onSwitch from './assets/img/on-switch.svg';
import offSwitch from './assets/img/off-switch.svg';

export function clearChildNodes(el: HTMLElement): void {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

export function initButtons(data: LinkList): void {
  const lightSwitch =
    (document.getElementById('light-switch') as HTMLImageElement) || null;

  if (localStorage.getItem('mode') == 'bonfire') {
    lightSwitch.src = offSwitch;
  }
  if (localStorage.getItem('mode') == 'work') {
    lightSwitch.src = onSwitch;
  }
  lightSwitch.addEventListener('click', () => {
    switchModes(data);
  });
}

export async function fetchWeather(date: Date): Promise<string> {
  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=42.293&longitude=-82.9&current=temperature_2m&hourly=temperature_2m&timezone=auto&forecast_days=1';
  const response = await fetch(url);
  const data = await response.json();
  return `${data.hourly.temperature_2m[date.getHours()]}`;
}

export function switchToWork(data: LinkList): void {
  // Creating or Getting Components / Component references
  const tab = (document.querySelector('title') as HTMLTitleElement) || null;
  const title =
    (document.querySelector('[data-list-title]') as HTMLLIElement) || null;
  const infoBar =
    (document.querySelector('[data-info-bar]') as HTMLDivElement) || null;
  const body =
    (document.querySelector('[data-body]') as HTMLBodyElement) || null;
  const directory =
    (document.querySelector('[data-directory]') as HTMLParagraphElement) ||
    null;
  const pic = (document.getElementById('picture') as HTMLImageElement) || null;
  const rightContainer =
    (document.querySelector('.link-container') as HTMLElement) || null;
  const linksContainer =
    (document.querySelector('.links-container') as HTMLElement) || null;
  const lightSwitch =
    (document.getElementById('light-switch') as HTMLImageElement) || null;
  const comicsDialogLauncher =
    (document.getElementById('comics-dialog-launcher') as HTMLImageElement) ||
    null;
  const comicsDialog =
    (document.getElementById('comics-dialog') as HTMLDialogElement) || null;

  // Remove Comics Dialog Window and Button to launch said Dialog
  if (comicsDialog && comicsDialogLauncher) {
    comicsDialog.remove();
    comicsDialogLauncher.remove();
  }

  localStorage.setItem('mode', 'work');
  rightContainer.removeChild(linksContainer);
  lightSwitch.src = onSwitch;
  lightSwitch.removeAttribute('data-mode');
  lightSwitch.setAttribute('data-mode', 'work');
  pic.removeAttribute('data-picture');
  pic.setAttribute('data-picture', 'work');
  title.removeAttribute('data-list-title');
  title.setAttribute('data-list-title', 'work');
  infoBar.removeAttribute('data-info-bar');
  infoBar.setAttribute('data-info-bar', 'work');
  body.removeAttribute('data-body');
  body.setAttribute('data-body', 'work');
  directory.removeAttribute('data-directory');
  directory.setAttribute('data-directory', 'work');
  directory.innerHTML = '&gt; cd ~/work/<span class="blinking">_</span>';
  tab.textContent = '~/work';
  rightContainer.appendChild(createWorkLinksEl(data));
}

export async function switchToBonfire(data: LinkList): Promise<void> {
  // Finding Elements that need to change
  const tab = (document.querySelector('title') as HTMLTitleElement) || null;
  const title =
    (document.querySelector('[data-list-title]') as HTMLLIElement) || null;
  const infoBar =
    (document.querySelector('[data-info-bar]') as HTMLDivElement) || null;
  const body =
    (document.querySelector('[data-body]') as HTMLBodyElement) || null;
  const directory =
    (document.querySelector('[data-directory]') as HTMLParagraphElement) ||
    null;
  const comicsDialogButton = createComicsDialogButton();
  const directoryContainer =
    (document.getElementById('directory-container') as HTMLDivElement) || null;
  const pic = (document.getElementById('picture') as HTMLImageElement) || null;
  const rightContainer =
    (document.querySelector('.link-container') as HTMLElement) || null;
  const linksContainer =
    (document.querySelector('.links-container') as HTMLElement) || null;
  localStorage.setItem('mode', 'bonfire');
  const timerButton =
    (document.getElementById('timer') as HTMLImageElement) || null;
  const timerDialog =
    (document.getElementById('timer-dialog') as HTMLDialogElement) || null;
  const comicsDialog = createComicsDialog();

  const comicButtons =
    (document.querySelectorAll(
      '.comic-series-button'
    ) as NodeListOf<HTMLButtonElement>) || null;

  // Adding display:flex here so it isn't visible when page loads
  comicsDialog.style.flex = 'flex';

  // if timer dialog and timer button are on the page, remove them
  if (timerDialog) {
    timerDialog.remove();
  }
  if (timerButton) {
    timerButton.remove();
  }
  const lightSwitch = document.getElementById(
    'light-switch'
  ) as HTMLImageElement;
  lightSwitch.removeAttribute('data-mode');
  lightSwitch.setAttribute('data-mode', 'bonfire');
  lightSwitch.src = offSwitch;
  rightContainer.removeChild(linksContainer);
  pic.removeAttribute('data-picture');
  pic.setAttribute('data-picture', 'bonfire');
  title.removeAttribute('data-list-title');
  title.setAttribute('data-list-title', 'bonfire');
  infoBar.removeAttribute('data-info-bar');
  infoBar.setAttribute('data-info-bar', 'bonfire');
  body.removeAttribute('data-body');
  body.setAttribute('data-body', 'bonfire');
  directory.removeAttribute('data-directory');
  directory.setAttribute('data-directory', 'bonfire');
  directoryContainer.removeChild(directoryContainer.lastElementChild as Node);
  directoryContainer.appendChild(directory);
  infoBar.insertBefore(comicsDialogButton, infoBar.firstChild);
  infoBar.appendChild(lightSwitch);
  directory.innerHTML = '&gt; cd ~/<span class="blinking">_</span>';
  rightContainer.appendChild(createBonfireLinkEl(data));
  tab.textContent = '~/bonfire';
  comicButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const comicArray = await fetchComic(button.dataset.rssUrl as string);
      const comicStripDiv =
        (document.getElementById('comic-strips-div') as HTMLDivElement) || null;
      comicArray.forEach((comic) => {
        comicStripDiv.appendChild(
          createComicStripElement(comic.seriesName, comic.stripURL)
        );
      });
    });
  });
  body.append(comicsDialog);

  /*
   * Comics Dialog functionality
   */

  comicsDialogButton.addEventListener('click', () => {
    comicsDialog.showModal();
  });
}

export function switchModes(data: LinkList) {
  if (localStorage.getItem('mode') == 'work') {
    switchToBonfire(data);
  } else {
    switchToWork(data);
  }
}

export function init(data: LinkList): void {
  const linkContainer =
    (document.querySelector('.link-container') as HTMLElement) || null;
  if (
    localStorage.getItem('mode') == null ||
    localStorage.getItem('mode') == 'bonfire'
  ) {
    const initStartMode = createBonfireLinkEl(data);
    linkContainer.appendChild(initStartMode);
    const lightSwitch = document.getElementById(
      'light-switch'
    ) as HTMLImageElement;
    lightSwitch.src = offSwitch;
    switchToBonfire(data);
    initButtons(data);
  } else if (localStorage.getItem('mode') == 'work') {
    const initStartMode = createWorkLinksEl(data);
    linkContainer.appendChild(initStartMode);
    const lightSwitch = document.getElementById(
      'light-switch'
    ) as HTMLImageElement;
    lightSwitch.src = onSwitch;
    switchToWork(data);
    initButtons(data);
  }
}

export async function fetchComic(rssURL: string): Promise<Array<ComicStrip>> {
  const parser = new DOMParser();
  const comicStripArray = new Array<ComicStrip>();
  const rssResponse = await fetch(rssURL);
  const textResponse = await rssResponse.text();
  const dataHunk = new window.DOMParser().parseFromString(
    textResponse,
    'text/xml'
  );
  const items = dataHunk.querySelectorAll('item');
  items.forEach((item) => {
    const stripData = item.querySelector('description')?.innerHTML.toString();
    const imgRegex = /<img[^>]*?src\s*=\s*[""']?([^'"" >]+?)[ '""][^>]*?>/g;
    const comicStrip = stripData?.match(imgRegex);
    if (comicStrip) {
      const dummy = parser.parseFromString(`${comicStrip}`, 'text/html');
      const temp: ComicStrip = {
        seriesName: dummy.getElementsByTagName('img')[0].alt,
        stripURL: dummy.getElementsByTagName('img')[0].src,
      };
      comicStripArray.push(temp);
    }
  });
  return comicStripArray;
}
