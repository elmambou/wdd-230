function visitCount() {
    var visits = Number(localStorage.getItem('visitCount'));
    var current = Boolean(sessionStorage.getItem('session'));
  
    if (!current) {
      visits++;
    }
  
    localStorage.setItem('visitCount', visits);
    sessionStorage.setItem('session', true);
  
    return visits;
  }