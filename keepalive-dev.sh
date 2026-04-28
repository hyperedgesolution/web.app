#!/bin/bash
cd /home/z/my-project
while true; do
  bun run dev 2>&1 | tee -a dev.log
  echo "[$(date)] Dev server exited, restarting in 2s..."
  sleep 2
done
