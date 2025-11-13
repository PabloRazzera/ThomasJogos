body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #3f51b5, #2196f3);
  font-family: Arial, sans-serif;
}

.calculator {
  background-color: #222;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(0,0,0,0.5);
  width: 260px;
}

#display {
  width: 100%;
  height: 50px;
  font-size: 22px;
  text-align: right;
  padding-right: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 10px;
  background-color: #111;
  color: white;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  font-size: 20px;
  padding: 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #444;
  color: white;
  transition: 0.2s;
}

button:hover {
  background-color: #666;
}

button:active {
  transform: scale(0.95);
}

