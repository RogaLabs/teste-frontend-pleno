import './App.css';

const html = String.raw;

const mounted = window.setTimeout;

const ajax = (url: RequestInfo, options?: RequestInit) => {
  return fetch(url, options).then((r) => r.json());
};

const stringify = (data: object) => {
  return JSON.stringify(data, null, 2);
};

export function App() {
  mounted(async () => {
    const info = document.querySelector<HTMLDivElement>('.app__data')!;
    const meta = document.querySelector<HTMLDivElement>('.app__meta')!;
    const input = document.querySelector<HTMLInputElement>('.app__form input')!;
    const btn = document.querySelector<HTMLButtonElement>('.app__form button')!;

    try {
      info.innerHTML = stringify(await ajax('/api/bookmarks'));
    } catch (err) {
      console.error(err);
    }

    btn.addEventListener('click', async () => {
      meta.innerHTML = 'Loading...';

      try {
        const data = await ajax(`/api/extract?url=${input.value.trim()}`);

        meta.innerHTML = stringify(data);
      } catch (err) {
        console.error(err);
      }
    });
  });

  return html`
    <div class="app">
      <h1>Bookmark Manager</h1>
      <div class="app__form">
        <input name="url" />
        <button>Extract</button>
      </div>
      <h3>Data Extracted</h3>
      <pre class="app__meta">Nothing found.</pre>
      <h3>Data from API</h3>
      <pre class="app__data">Loading data from api...</pre>
    </div>
  `;
}
