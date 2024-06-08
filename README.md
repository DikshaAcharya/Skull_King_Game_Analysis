# Skull King Game analysis

## Introduction

This project is for players who have experience with or knowledge of Skull King. It consists of a basic interactive anaylsis of one game if 10 rounds with 6 players. 

This game is a strategic card game that combines the excitement of bid-taking with unique special cards and a pirate theme. Players must balance the risk and reward of their bids and use their cards wisely to outwit their opponents and win the most points.

### Objective 
The goal of the game is to score the most points by correctly predicting the number of bids you will win each round.
Each round begins with a YoHoHo and the players place their bids.

### Scoring 
If a player’s bid matches the number of bids won:
They score 20 points per bid, plus in some cases a bonus for a correct bid.
If a player’s bid is incorrect:
They lose 10 points for each bid they were off by.

![game_rules](https://github.com/DikshaAcharya/Skull_King_Game_Analysis/assets/132992878/ddf3a6ac-56e7-4ed5-b46a-1c137fa03a87)

#### Special bonuses 
Winning a bid with the Skull King: 50 points.
Catching the Mermaid with the Skull King: 30 points.

### End of the game
The player having the highest total points at the end of the 10th round is the winner and is titled as the Skull King!

By analyzing the game data and implementing new features, we can gain deeper insights into Skull King and enhance the game's appeal for players. 
Interactive analysis helps in understanding the game's dynamics and complexity. 

## Data
- Among many games played with my friends, one game's scoring was opted to be utilized as the dataset for this project
- digitalised the data into an execl table
- converted the data into nodes and links in js format for network visualisation 
- Opted to have another JS data file in different sturture for plot visualisation 

## Tools
- Coding of this project is done by D3 --> Small intro of D3
- multiple websites for various parts of coding. the links are provided in the script.js above the code in question.
- ChatGPT to generate some parts of the code. Conversation links also provided above the generated code.
- Improved the interactivity based on some pertinent inputs from users.

## Overview of the webpage
--> full image 
- 4 main interactive funcitons :
    - network map to understand interactions between players --> image zoom
    - plot dedicated to each round representing the points and bids made by the players --> image zoom
    - plot dedicated to each player's performance accross all the rounds --> image zoom
    - An interactive div that slids in and out, which contains a brief description of the game --> image 
      
## To go further
Given the time constraints, this project will focus on one game and provide a basic representation of statistical analysis. However, a larger dataset would offer better insights into effective and ineffective strategies. Additionally, creating a risk index could evaluate different strategies, and adding features like a "YoHoHo" sound effect when a round is clicked could improve the user experience.

## Author
- Diksha Acharya
- Supervised by Isaac Pante
## Acknowledgement
- Player of the game
- professor for the supervision
- inputs from users
