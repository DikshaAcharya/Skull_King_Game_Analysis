# Skull King Game analysis

## Introduction

This project is for players who have experience with or knowledge of Skull King. It consists of a basic interactive anaylsis of one game of 10 rounds with 6 players. 

This game is a strategic card game that combines the excitement of bid-taking with unique special cards and a pirate theme. Players must balance the risk and reward of their bids and use their cards wisely to outwit their opponents and win most points.

### Objective 
The goal of the game is to score the most points by correctly predicting the number of bids you will win each round.
Each round begins with a YoHoHo and the players place their bids.

### Scoring 
- If a player’s bid matches the number of bids:

  They score 20 points per bid
  Plus a bonus point in case of:
  
      - Winning a bid with the Skull King = 50 points
      - Catching the Mermaid with the Skull King = 30 points 

- If a player’s bid is incorrect:

  They lose 10 points for each bid they were off.


![game_rules](Images/Readme_images/game_rules.jpg)

### End of the game
The player having the highest total points at the end of the 10th round is the winner and is titled as the Skull King!

By analyzing the game data and implementing new features, we can gain deeper insights into Skull King and enhance the game's appeal for players. 
Interactive analysis helps in understanding the game's dynamics and complexity. 

## Data
Among the many games played with my friends, one game's scoring was chosen as the dataset for this project. 
The data was digitized into an Excel table:
![Excel_data](Images/Readme_images/Excel_data.png)

Then converted into nodes and links in JavaScript format for network visualization:
![JS_data_network](Images/Readme_images/JS_data_network.png)

Additionally, another JavaScript data file with a different structure was created for plot visualization:
![JS_data_all](Images/Readme_images/JS_data_all.png)

## Tools
- D3.js: The coding for this project is done using D3.js, a powerful JavaScript library for producing dynamic, interactive data visualizations in web browsers. It utilizes HTML, SVG, and CSS to bring data to life through visual representation. For more information, feel free to consult their webpage: https://d3js.org/.
- Online Resources: Multiple websites were referenced for various parts of the coding process. The specific links to these resources are provided in the script.js file above the relevant sections of code.
- ChatGPT: Some parts of the code were generated using ChatGPT. Links to the conversations with ChatGPT are also included above the generated code for reference.
- User Feedback: The interactivity of the project was enhanced based on valuable inputs from users, leading to a more engaging and user-friendly experience.

## Overview of the webpage
--> full image 
- 4 main interactive funcitons :
    - network map to understand interactions between players --> image zoom
    - plot dedicated to each round representing the points and bids made by the players --> image zoom
    - plot dedicated to each player's performance accross all the rounds --> image zoom
    - An interactive slide bar, which contains a brief description of the game --> image 
      
## To go further
Given the time constraints, this project will focus on one game and provide a basic representation of statistical analysis. However, a larger dataset would offer better insights of effective and ineffective strategies. Additionally, creating a risk index could evaluate different strategies, and adding features like a "YoHoHo" sound effect when a round is clicked could improve the user experience.

## Author
- Diksha Acharya
- Supervised by Isaac Pante
## Acknowledgement
- Player of the game
- professor for the supervision
- inputs from users
