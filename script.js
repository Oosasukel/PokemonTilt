const container = document.getElementById('container');


{/* 

    <div class="pokeContainer">
      <div class="pokeBackground">

      </div>
      <img height="220" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png" class="pokeImage" />
    </div>

    <div class="infoContainer">
      <h1>Charmeleon</h1>
      <div class="statsContainer">
        <p>HP: 58</p>
        <p>ATACK: 64</p>
        <p>DEFENSE: 58</p>
        <p>SPEED: 80</p>
      </div>
    </div>

 */}

fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=251')
  .then(response => response.json())
  .then(data => {
    const pokemons = data.results;

    pokemons.forEach(({name, url}) => {
      const cardContainer = document.createElement('div');
      cardContainer.classList.add('cardContainer');
      container.appendChild(cardContainer);

      VanillaTilt.init(cardContainer);

      const card = document.createElement('div');
      card.classList.add('card');
      cardContainer.appendChild(card);

      const pokeContainer = document.createElement('div');
      pokeContainer.classList.add('pokeContainer');
      card.appendChild(pokeContainer);

      const pokeBackground = document.createElement('div');
      pokeBackground.classList.add('pokeBackground');
      pokeContainer.appendChild(pokeBackground);

      const pokeImage = document.createElement('img');
      pokeImage.classList.add('pokeImage');
      pokeContainer.appendChild(pokeImage);

      const infoContainer = document.createElement('div');
      infoContainer.classList.add('infoContainer');
      card.appendChild(infoContainer);

      const pokeName = document.createElement('h1');
      pokeName.innerHTML = name;
      infoContainer.appendChild(pokeName);

      const statsContainer = document.createElement('div');
      statsContainer.classList.add('statsContainer');
      infoContainer.appendChild(statsContainer);

      fetch(url).then(response => response.json()).then(pokeData => {
        const stats = pokeData.stats;
        const sprite = pokeData.sprites.other['official-artwork'].front_default;
        const height = pokeData.height > 22 ? 22 : pokeData.height;
        const type = pokeData.types[0].type.name;

        const statType = document.createElement('p');
        const hp = document.createElement('p');
        const attack = document.createElement('p');
        const defense = document.createElement('p');
        const speed = document.createElement('p');
        statType.innerHTML = `TYPE: ${type}`;
        hp.innerHTML = `${stats[0].stat.name}: ${stats[0].base_stat}`;
        attack.innerHTML = `${stats[1].stat.name}: ${stats[1].base_stat}`;
        defense.innerHTML = `${stats[2].stat.name}: ${stats[2].base_stat}`;
        speed.innerHTML = `${stats[5].stat.name}: ${stats[5].base_stat}`;
        statsContainer.appendChild(statType);
        statsContainer.appendChild(hp);
        statsContainer.appendChild(attack);
        statsContainer.appendChild(defense);
        statsContainer.appendChild(speed);

        switch(type){
          case 'fire':
            pokeBackground.style.background = 'linear-gradient(#FD9A28, #d50000)';
            break;
          case 'grass':
            pokeBackground.style.background = 'linear-gradient(#BFEB55, #458766)';
            break;
          case 'water':
            pokeBackground.style.background = 'linear-gradient(#3D4490, #5994FF)';
            break;
          case 'ice':
            pokeBackground.style.background = 'linear-gradient(#ffffff, #83C3FF)';
            break;
          case 'psychic':
            pokeBackground.style.background = 'linear-gradient(#F1B9BA, #5C3B95)';
            break;
          case 'eletric':
            pokeBackground.style.background = 'linear-gradient(#F7F100, #EF9D00)';
            break;
          case 'bug':
            pokeBackground.style.background = 'linear-gradient(#F7F100, #EF9D00)';
            break;
          case 'normal':
            pokeBackground.style.background = 'linear-gradient(#F1B9BA, #E76F53)';
            break;
          case 'fighting':
            pokeBackground.style.background = 'linear-gradient(#F1B9BA, #E76F53)';
            break;
          case 'ground':
            pokeBackground.style.background = 'linear-gradient(#F8ED83, #B35818)';
            break;
          case 'rock':
            pokeBackground.style.background = 'linear-gradient(#F8ED83, #B35818)';
            break;
          case 'steel':
            pokeBackground.style.background = 'linear-gradient(#F8ED83, #B35818)';
            break;
          case 'poison':
            pokeBackground.style.background = 'linear-gradient(#E16D99, #4B1585)';
            break;
          case 'fairy':
            pokeBackground.style.background = 'linear-gradient(#F4D3DD, #E06098)';
            break;
          default:
            pokeBackground.style.background = 'linear-gradient(#9556FF, #313770)';
            break;
        }

        pokeImage.src = sprite;
        pokeImage.height = height * 20;
        pokeImage.style.marginBottom = `${Math.pow(height, 3)/100}px`;
      });
    });
  })