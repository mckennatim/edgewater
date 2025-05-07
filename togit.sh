#!/bin/bash
# chmod +x togit.sh
# ./togit.sh 19-edgewater
tag="$1"
echo "$tag"

from="/home/tim/www/react/v18o/iot/edgewater"
to="/home/tim/www/react/v18o/tags/$tag"

# Copy all files from $from to $to, excluding .pio directory
rsync -av --exclude='.git/' "$from/" "$to/"

git add . -A 
git commit -m "$tag"
git tag "$tag"
git push
git push --tags