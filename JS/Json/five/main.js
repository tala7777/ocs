document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.table-btn');
  // prefer the <table> selector; fallback to class
  const table = document.querySelector('table.users-table') || document.querySelector('.users-table');
  const tbody = document.querySelector('.users-table-body');

  if (!btn) return console.error('No .table-btn found');
  if (!table) return console.error('No .users-table <table> found — check HTML class placement');
  if (!tbody) console.warn('No .users-table-body found — rows will still be inserted into the table');

  // Add a .hidden class to the page stylesheet to override any conflicting CSS
  const style = document.createElement('style');
  style.textContent = `.hidden-by-js { display: none !important; }`;
  document.head.appendChild(style);

  // start hidden (optional)
  table.classList.add('hidden-by-js');

  btn.addEventListener('click', e => {
    if (e.detail === 2) return; // ignore double-click firing as two single clicks

    // show table
    table.classList.remove('hidden-by-js');

    // fetch and populate
    fetch('https://raw.githubusercontent.com/tala7777/ocs/main/JS/Json/five/users.json')
      .then(res => {
        if (!res.ok) throw new Error('Network response not ok: ' + res.status);
        return res.json();
      })
      .then(data => {
        const arr = Array.isArray(data) ? data : (data.users || []);
        const rows = arr.map(u => `
          <tr>
            <td>${u.firstName ?? ''}</td>
            <td>${u.email ?? ''}</td>
            <td>${u.phone ?? ''}</td>
          </tr>`).join('');
        if (tbody) tbody.innerHTML = rows;
        else table.querySelector('tbody')?.insertAdjacentHTML('beforeend', rows);
      })
      .catch(err => {
        console.error('Fetch error:', err);
      });
  });

  btn.addEventListener('dblclick', () => {
    // hide whole table (thead + tbody)
    table.classList.add('hidden-by-js');
    // also clear rows to prevent stale content
    if (tbody) tbody.innerHTML = '';
    else {
      const tbd = table.querySelector('tbody');
      if (tbd) tbd.innerHTML = '';
    }
  });
});
