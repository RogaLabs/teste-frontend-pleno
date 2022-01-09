import './App.css';

const html = String.raw;

const mounted = window.setTimeout;

const getJSON = (url: string) => fetch(url).then((r) => r.json());

export function App() {
  mounted(async () => {
    const info = document.querySelector('.info');

    try {
      const url = 'https://rogalabs.com';
      const data = await getJSON(`/api/extract?url=${url}`);

      info!.innerHTML = JSON.stringify({ ...data, content: '' }, null, 2);
    } catch (err) {
      console.error(err);
    }
  });

  return html`
    <div class="app">
      <p>Render you app here...</p>
      <pre class="info">Loading metadata from "https://rogalabs.com"</pre>
    </div>
  `;
}
