
const array = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|" ];

time = 100;

for(const item of array) {
  setTimeout(() => {
    process.stdout.write('\r' + item + '   ');
  }, time);
  time += 200;
}