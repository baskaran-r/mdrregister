export default function() {
  const duration = 350;

  this.transition(
    this.use('crossFade', { duration })
  );
}
