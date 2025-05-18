const firebaseConfig = {
    apiKey: "your-api-key-here",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-bucket-id",
    messagingSenderId: "your-messagingSenderId",
    appId: "your-app-id"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
