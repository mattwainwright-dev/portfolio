# My Portfolio

A React site that shows the projects I built in Level 2.

This portfolio documents my progress through CodeX Academy and the React skills I am building in Level 3.

## Components

| Component       | What it shows                                                  | Where its values come from            | What it remembers                      | What it receives                                                                                               |
| --------------- | -------------------------------------------------------------- | ------------------------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `Header`        | my name                                                        | typed into JSX                        | -                                      | -                                                                                                              |
| `Hero`          | my hero photo                                                  | photos, descriptions, and `heroPhoto` | photo index, color, and sepia settings | -                                                                                                              |
| `PhotoControls` | nine hero buttons                                              | `Hero`                                | -                                      | `onPrevious`, `onNext`, `onFirst`, `onSecond`, `onThird`, `onColor`, `onBlackAndWhite`, `onNoSepia`, `onSepia` |
| `About`         | information about me                                           | typed into JSX                        | -                                      | -                                                                                                              |
| `ProjectCount`  | number of projects                                             | `projects.length`                     | -                                      | -                                                                                                              |
| `GitHubLink`    | my GitHub profile link                                         | URL and label variables               | -                                      | -                                                                                                              |
| `Fortune`       | a random Pulse-related line                                    | fortune list and random number        | current fortune                        | -                                                                                                              |
| `ProjectCard`   | project name, status, description, details, links, and buttons | `projects.js` through `App`           | likes and Show More state              | `project`, optionally `featured`                                                                               |
| `Footer`        | copyright and year                                             | current year                          | -                                      | -                                                                                                              |

## What I'm adding next

- Color and Black and White buttons on my hero
- A new Fortune button
- A Like button on every project card
- Add a Philosophy section exploring the connection between music, code, creativity, and community

## Built with

React, Vite, Bun, and Pico CSS, and my custom Pulse CSS library.
