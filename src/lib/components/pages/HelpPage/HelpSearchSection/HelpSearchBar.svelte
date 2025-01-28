<script lang="ts">
  import rightArrow from "../../../../assets/righ-arrow.svg";
  let searchInput: string = $state("");
</script>

<div class="help-search-bar">
  <input class="search" type="search" placeholder="Search" bind:value={searchInput}/>
  <div class="send-button">
    <img class="right-arrow" src={rightArrow} alt="search button"/>
  </div>
</div>

<style>
  .help-search-bar {
    position: relative;
    border-radius: 3px;
    height: 64px;
    width: 720px;
    background-color: white;
    &:hover, &:focus {
      .search {
        border: 1px solid var(--c-blue);
      }
    }
  }

  .search {
    outline: none;
    border-radius: 3px;
    border: 0.1px solid black;
    font-size: 1.2rem;
    padding: 16px;
    width: 100%;
    height: 100%;
  }

  .send-button {
    position: absolute;
    right: 0;
    top: 0px;
    bottom: 0px;
    padding-right: 15px;
    display: flex;
    align-items: center;
  }

  .right-arrow {
    width: 30px;
  }
</style>