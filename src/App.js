import React, { Component } from 'react';




class App extends Component { // Définition de la classe App qui étend la classe Component de React
  constructor(props) { 
    super(props);
    this.state = {
      person: {   // Initialisation de l'état local du composant avec les données de la personne et les paramètres d'affichage
        fullName: 'Muhamadu Fallilu Mback Samb',
        bio: 'Passionate about Life.',
        imgSrc: '/image/404467423_376205588133282_7116852221912004462_n.jpg',
        profession: 'Photographer,Visual Artist'
      },
      show: false, // Initialisation du paramètre d'affichage à false (profiel masqué par défaut)
      timeElapsed: 0 // Initialisation du temps écoulé à 0
    };
  }

  componentDidMount() { // Fonction du cycle de vie appelée après le premier rendu du composant
    this.timer = setInterval(() => {
      this.setState(prevState => ({  // Mise à jour du temps écoulé dans l'état local en utilisant setState
        timeElapsed: prevState.timeElapsed + 1 // Incrémentation du temps écoulé
      }));
    }, 1000);
  }


  toggleShow = () => {
    this.setState({ show: !this.state.show });
  }

  render()  { // Fonction de rendu du composant
    const { fullName, bio, imgSrc, profession } = this.state.person;    // récupération des données de la personne à partir de l'état local pour une utilisation plus facile
    return (  // Renvoie du contenu JSX à afficher dans le navigateur
      <div>
        <button onClick={this.toggleShow}>Afficher le   Profile</button>
        {this.state.show && (
          <div>
            <h1>{fullName}</h1>
            <img src={imgSrc} style={{ width: '500px', height: '500px'}} alt={fullName} />
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Time elapsed since mounting: {this.state.timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;  // Exportation du composant App pour une utilisation dans d'autres fichiers

