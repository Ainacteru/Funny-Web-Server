#!/bin/bash

# Set variables
PROJECT_PATH="/home/rpi4/Code/dotnetStuff/MainWebServer/MainWebServer.csproj"
PUBLISH_DIR="/home/rpi4/Code/dotnetStuff/MainWebServer/published"
SERVICE_NAME="mainServer.service"

echo "Publishing .NET app..."
dotnet publish "$PROJECT_PATH" -c Release -o "$PUBLISH_DIR"

echo "Restarting systemd service..."
sudo systemctl restart "$SERVICE_NAME"

echo "Done! Service restarted with latest build."

