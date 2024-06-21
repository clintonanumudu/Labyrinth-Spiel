const canvas = document.getElementById('mazeCanvas');
        const ctx = canvas.getContext('2d');
        const cellSize = 50;
        const rows = canvas.height / cellSize;
        const cols = canvas.width / cellSize;
        const maze = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ];

        const player = {
            x: 1,
            y: 1,
            draw() {
                ctx.fillStyle = 'blue';
                ctx.beginPath();
                ctx.arc(this.x * cellSize + cellSize / 2, this.y * cellSize + cellSize / 2, cellSize / 3, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        function drawMaze() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    if (maze[y][x] === 1) {
                        ctx.fillStyle = 'black';
                        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                    }
                }
            }
        }

        function movePlayer(dx, dy) {
            const newX = player.x + dx;
            const newY = player.y + dy;
            if (maze[newY][newX] === 0) {
                player.x = newX;
                player.y = newY;
                if (newX === cols - 1 && newY === rows - 2) {
                    alert("Herzlichen Glückwunsch! Du hast einen Weg aus dem Labyrinth gefunden.");
                    player.x = 1;
                    player.y = 1;
                }
                drawMaze();
                player.draw();
            }
        }

        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    movePlayer(0, -1);
                    break;
                case 'ArrowDown':
                    movePlayer(0, 1);
                    break;
                case 'ArrowLeft':
                    movePlayer(-1, 0);
                    break;
                case 'ArrowRight':
                    movePlayer(1, 0);
                    break;
            }
        });

        drawMaze();
        player.draw();