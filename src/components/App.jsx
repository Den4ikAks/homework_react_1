import React from "react";

function App() {
  const name = "Denis";
  const welcomeMessage = "Ласкаво просимо до нашого сайту!";
  const imageUrl = "https://www.iphones.ru/wp-content/uploads/2020/11/funny-animals-award-2020-iphones-ru-45.jpg";
  const imageAlt = "image";
  const favoriteSite = { name: "Google", url: "https://www.google.com/" };
  const num1 = 5;
  const num2 = 10;
  const sum = num1 + num2;
  const colors = ["red", "blue", "green"];

  return (
    <div>
      <h1>{name}</h1>
      <p>{welcomeMessage}</p>
      <img src={imageUrl} alt={imageAlt} width="300" height="200" />
      <p>
      Favorite site <a href={favoriteSite.url}>{favoriteSite.name}</a>
      </p>
      <p>Sum {sum}</p>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;