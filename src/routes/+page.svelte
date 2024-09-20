<script>
  let showProfile = false;

  const toggleProfile = () => {
    showProfile = !showProfile;
  };
</script>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
  }

  button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: opacity 0.3s ease;
  }

  .profile-card {
    position: absolute; /* Keep it absolute for centering */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 400px;
    height: 700px;
    display: none;
    overflow: hidden;
    flex-direction: column;
  }

  .profile-card.active {
    display: flex; /* Show the card as flex */
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    color: #ff0000;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center content vertically */
    align-items: center; /* Center content horizontally */
    flex-grow: 1; /* Allow the content area to expand */
  }

  img {
    width: 250px;
    height: 400px;
    border-radius: 8px;
    display: block;
    margin-bottom: 1rem; /* Space below the image */
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center footer content */
    margin-top: auto; /* Push footer to the bottom */
  }

  .socials {
    display: flex;
    justify-content: center; /* Center the social buttons */
    gap: 1rem; /* Space between buttons */
  }

  .social-icon {
    width: 24px; /* Set a fixed size for icons */
    height: 24px;
    fill: #000; /* Icon color */
    transition: fill 0.3s ease; /* Transition effect on hover */
  }

  .social-icon:hover {
    fill: #0077b5; /* Change color on hover (for LinkedIn) */
  }

  .github:hover .social-icon {
    fill: #333; /* Change color on hover (for GitHub) */
  }
</style>

<main>
  {#if !showProfile}
    <button aria-label="Hover me" on:mouseover={() => (showProfile = true)} on:mouseout={() => (showProfile = false)}>
      Hover me
    </button>
  {:else}
    <article class="profile-card active" role="dialog" aria-labelledby="profile-title" aria-modal="true">
      <button class="close-button" on:click={toggleProfile} aria-label="Close profile card">×</button>
      <div class="content">
        <img src="images/Squad2C-Lesley.JPG" alt="Profile picture" />
        <h2 id="profile-title">About Me</h2>
        <p>Your about me text goes here.</p>
      </div>
      <footer>
        <p>Connect with me:</p>
        <div class="socials">
          <a class="github" href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.304 3.438 9.8 8.207 11.387.6.111.793-.26.793-.577 0-.285-.01-1.034-.015-2.029-3.338.724-4.042-1.61-4.042-1.61-.546-1.38-1.334-1.749-1.334-1.749-1.091-.745.083-.73.083-.73 1.206.085 1.836 1.236 1.836 1.236 1.069 1.826 2.8 1.298 3.487.993.107-.775.419-1.298.762-1.598-2.665-.303-5.466-1.333-5.466-5.935 0-1.313.47-2.385 1.239-3.224-.124-.303-.537-1.525.117-3.176 0 0 1.007-.322 3.303 1.226a11.447 11.447 0 0 1 3.003-.404c1.016.004 2.041.137 3.003.404 2.296-1.548 3.303-1.226 3.303-1.226.655 1.651.241 2.873.118 3.176.77.839 1.239 1.911 1.239 3.224 0 4.613-2.805 5.63-5.47 5.926.43.373.815 1.102.815 2.224 0 1.607-.015 2.899-.015 3.29 0 .32.19.692.8.575C20.564 21.8 24 17.304 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.617 0h-15.234c-2.659 0-4.617 1.958-4.617 4.617v15.234c0 2.659 1.958 4.617 4.617 4.617h15.234c2.659 0 4.617-1.958 4.617-4.617v-15.234c0-2.659-1.958-4.617-4.617-4.617zm-11.43 19.4h-2.977v-10.9h2.977v10.9zm-1.49-12.58c-.963 0-1.744-.783-1.744-1.743 0-.961.782-1.743 1.744-1.743.962 0 1.743.782 1.743 1.743 0 .96-.781 1.743-1.743 1.743zm13.59 12.58h-2.977v-5.537c0-1.316-.025-3.008-1.834-3.008-1.834 0-2.114 1.433-2.114 2.898v5.647h-2.977v-10.9h2.862v1.482h.042c.398-.755 1.37-1.55 2.824-1.55 3.016 0 3.573 1.986 3.573 4.572v6.393z"/></svg>
          </a>
        </div>
      </footer>
    </article>
  {/if}
</main>
