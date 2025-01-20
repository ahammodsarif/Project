<script>
        document.getElementById('bidForm').addEventListener('submit', async (event) => {
            event.preventDefault();
            const bidAmount = document.getElementById('bidAmount').value;
            const response = await fetch('/place-bid', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ bidAmount })
            });
            const result = await response.json();
            document.getElementById('statusMessage').innerText = result.message;
        });
    </script>