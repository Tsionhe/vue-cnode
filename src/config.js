const hello = "world"
const say = "This is a sunny day"
async function timeout(ms) {
  await new Promise((resolve)=>{
  console.log('start');
  setTimeout(resolve, ms);
})}

async function print(value, ms) {
  await timeout(ms);
  console.log(value);
}

print('hello world', 2000).then(()=>{
  print('another async', 1000);
  console.log('then');
})
