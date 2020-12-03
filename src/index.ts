/**
 * Make sounds when an element is mutated.
 *
 * @param element A DOM Element to observe - can be document to observe everything
 * @returns A function which stops the observer
 */
export function emitSoundsWhenMutated(element: Node): () => void {
  const blip = createSoundEmitter();
  const observer = new MutationObserver((mutationsList) =>
    blip(mutationsList.length)
  );

  observer.observe(element, {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
  });

  return () => observer.disconnect();
}

/**
 *
 * @returns Call this function with the number of changes to get a sound that relates
 * to the number of changes made. More changes means a higher pitch.
 */
export function createSoundEmitter(): (n: number) => void {
  const audioCtx = new (window.AudioContext ||
    (window as any).webkitAudioContext)();

  return (numberOfChanges: number) => {
    const oscillator = audioCtx.createOscillator();
    oscillator.connect(audioCtx.destination);
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(
      Math.log(numberOfChanges + 5) * 880,
      audioCtx.currentTime
    );

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.01);
  };
}
