
 
    // Firebase Configuration
    const firebaseConfig = {
      apiKey: "AIzaSyC3NRbfpISjPQr2WO6zYTml0n2SPMgJot8",
      authDomain: "ittehad-visitor-view.firebaseapp.com",
      databaseURL: "https://ittehad-visitor-view-default-rtdb.firebaseio.com/",
      projectId: "ittehad-visitor-view",
      storageBucket: "ittehad-visitor-view.firebasestorage.app",
      messagingSenderId: "335135791553",
      appId: "1:335135791553:web:de9a76def812f6fd97b740"
    };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    // Date Keys
    const today = new Date();
    const dateKey = today.toISOString().split('T')[0];
    const yesterdayKey = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const weekKey = `${today.getFullYear()}-W${Math.ceil(today.getDate()/7)}`;
    const monthKey = `${today.getFullYear()}-${today.getMonth()+1}`;
    const yearKey = `${today.getFullYear()}`;

    // Update Counter
    function updateCounter(path) {
      const ref = db.ref(`counters/${path}`);
      ref.transaction(count => (count || 0) + 1);
    }

    updateCounter(`today/${dateKey}`);
    updateCounter(`week/${weekKey}`);
    updateCounter(`month/${monthKey}`);
    updateCounter(`year/${yearKey}`);
    updateCounter(`total`);

    // Set Yesterday's Counter
    db.ref(`counters/today/${yesterdayKey}`).once('value').then(snapshot => {
      const yesterdayCount = snapshot.val() || 0;
      db.ref(`counters/yesterday/${yesterdayKey}`).set(yesterdayCount);
    });

    // Display Counter
    function displayCounter(path, elementId) {
      db.ref(`counters/${path}`).on('value', snapshot => {
        document.getElementById(elementId).textContent = snapshot.val() || 0;
      });
    }

    displayCounter(`today/${dateKey}`, 'today');
    displayCounter(`yesterday/${yesterdayKey}`, 'yesterday');
    displayCounter(`week/${weekKey}`, 'week');
    displayCounter(`month/${monthKey}`, 'month');
    displayCounter(`year/${yearKey}`, 'year');
    displayCounter(`total`, 'total');
 