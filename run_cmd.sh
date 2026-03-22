#!/bin/bash



git add .

git commit -m "Update portfolio by run_cmd.sh"

git push origin main

npm run deploy
