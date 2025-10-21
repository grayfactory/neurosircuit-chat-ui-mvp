<script lang="ts">
</script>

<div class="message message-assistant flex gap-3 items-start">
  <div class="message-avatar w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
    <span class="material-icons text-2xl">favorite_border</span>
  </div>
  <div class="message-wrapper">
    <div class="message-content flex gap-1 items-center p-3 rounded-large bg-surface-light dark:bg-surface-dark shadow-sm">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>
</div>

<style>
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--text-light-secondary);
    animation: typing 1.4s infinite;
  }
  
  :global(.dark) .dot {
    background-color: var(--text-dark-secondary);
  }
  
  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  .dot:nth-child(3) {
    animation-delay: 0.4s;
  }
  
  @keyframes typing {
    0%, 60%, 100% {
      opacity: 0.3;
    }
    30% {
      opacity: 1;
    }
  }
</style>
