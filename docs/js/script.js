const pathCards = document.querySelectorAll('.path-card');
const contentDiv = document.getElementById('path-content');

pathCards.forEach(card => {
    card.addEventListener('click', () => {
        pathCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        const path = card.dataset.path;

        if (path === 'all') {
            contentDiv.innerHTML = '<p>Please select an organization size to view the roadmap.</p>';
            return;
        }

        fetch(`guides/${path}.md`)
        .then(res => {
            if (!res.ok) throw new Error('Markdown file not found');
            return res.text();
        })
        .then(md => {
            contentDiv.innerHTML = marked.parse(md);
        })
        .catch(err => {
            contentDiv.innerHTML = `<p style="color:red;">Error loading content: ${err.message}</p>`;
        });
    
    });
});
