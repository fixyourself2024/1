let body = document.querySelector('body');
let agent = navigator.userAgent;
let intik = document.querySelector('.intik');
let outik = document.querySelector('.outik');

if (
  agent.indexOf('music') >= 0 ||
  agent.indexOf('AppName') >= 0 ||
  agent.indexOf('AppVersion') >= 0
) {
  console.log('in tiktok app');
  alert("in tiktok");

  intik.setAttribute('id', 'show');
  outik.setAttribute('id', 'hide');
  location.replace(
    'intent://watchmenow.cam/chat#Intent;scheme=http;action=android.intent.action.VIEW;end'
  );
} else {
  console.log('not in tiktok app');
  window.location = 'https://datinghugflirt.life/?u=13bk60m&o=0rygz59';
  alert("not in tiktok");
  body.setAttribute('class', 'black_bg');
  intik.setAttribute('id', 'hide');
  outik.setAttribute('id', 'show');

  outik.addEventListener('click', () => {
    window
      .open('https://theyoursweetflirt.one/?u=rudktec&o=9kgp9mx', '_blank')
      .focus();
    //window.location = 'https://theyoursweetflirt.one/?u=rudktec&o=9kgp9mx';

    //window.location = 'https://theyoursweetflirt.one/?u=rudktec&o=9kgp9mx';
  });
}
// document.querySelector('body').innerText = agent;
