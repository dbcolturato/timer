const alarm = function(argv) {
  for (let i = 2; i < argv.length; i++) { 
    if (Number.isNaN(argv[i]) || argv[i] > 0) {
    setTimeout(
    () => process.stdout.write('\x07'),
    argv[i] * 1000
  )
  }
}
};

alarm(process.argv);