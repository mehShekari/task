// * relative date pure js
function formatDate(val: Date) : any
{ 
  const currDate: any = new Date();
  let commentDate: any = new Date(val);

  let delta = currDate - (commentDate);

  const sec = (delta / 1000) % 60;
  const min = (delta / (1000 * 60)) % 60;
  const hour = (delta / (1000 * 60 * 60)) % 60;
  const days = (delta / (1000 * 60 * 60 * 24));

  function tt(val: any): any{
    return Math.floor(val) > 0 ? Math.round(val) : null  
  }
  
  const months =  tt(days / 30);
  let years = months > 12 ? months / 12 : null;

  console.log(`
    year: ${tt(years)}
    month: ${tt(days / 30)},
    day: ${tt(days)},
    hour: ${tt(hour)},
    min: ${tt(min)},
    sec: ${tt(sec)},
  `);

  return ""
}