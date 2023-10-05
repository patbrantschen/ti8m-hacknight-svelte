<script lang="ts">
  import { onMount } from "svelte";
  import issImage from './assets/iss.png'
  import tiangongImage from './assets/tiangong.png'
  import rocket from './assets/rocket.png'
  import { apiData, issAstronauts, tiangongAstronauts } from './store.js';

  onMount(async () => {
  fetch("http://api.open-notify.org/astros.json")
  .then(response => response.json())
  .then(data => {
		console.log(data);
    apiData.set(data);
  }).catch(error => {
    console.log(error);
    return [];
  });
});
</script>

<main>
  <div id="space">
    <div class="craft craft-iss">
        <h2 class="craft-title">ISS</h2>
        <img class="craft-image" src={issImage} alt="Image of ISS craft."/>
        <div class="craft-crew">
          <span>Astronauts: </span>
          <ul>
            {#each $issAstronauts as astronaut}
                <li>{astronaut}</li>
            {/each}
            </ul>
        </div>
    </div>
    <div class="craft craft-tiangong">
        <h2 class="craft-title">Tiangong</h2>
        <img class="craft-image" src={tiangongImage} alt="Image of tiangong craft."/>
        <div class="craft-crew">
          <span>Astronauts: </span>
          <ul>
            {#each $tiangongAstronauts as astronaut}
                <li>{astronaut}</li>
            {/each}
            </ul>
        </div>
    </div>
  </div>
  <div id="rocket">
    <img class="rocket-image" src={rocket} alt="Image of tiangong craft."/>
  </div>
  <div id="space-sender">
      <form method="POST">
          <input name="name" type="text" placeholder="enter name ..."/>
          <select name="craft">
            <option disabled selected >choose craft ...</option>
            <option>ISS</option>
            <option>tiangong</option>
          </select> 
          <button type="button">Send to space!</button>
      </form>
  </div>
</main>

<style>
  :global(body){
        background-color: lightseagreen;
        background-image: url("./assets/background.jpg");
        color: white;
  }

  #space {
    display: flex;
    justify-content: space-between;
    width: 1280px;
  }

  .craft-image {
    width: 400px;
  }

  .rocket-image {
    width: 100px;
  }



  .craft-crew {
    text-align: left;
  }
  .craft-crew span {
    font-weight: bold;
    text-shadow: #FFF 1px 0 10px;
  }

  #rocket {
    position: absolute;
    left: 50%;
    bottom: 150px;
    text-align: center;
  }

  #space-sender {
    position: absolute;
    bottom: 40px;
    width: 90%;
    text-align: center;
  }

  #space-sender input[type=text], #space-sender select {
    padding: 10px;
    background-color: transparent;
    border-color: white;
    color: white;
    font-size: 1.4rem;
  }

  #space-sender button {
    margin-left: 10px;
    color: white;
    padding: 10px;
    background-color: #4CAF50; /* Green */
    border: none;
    font-size: 1.4rem;
    box-shadow: 0 5px 15px rgba(88, 255, 163, 0.7);
  }

</style>
