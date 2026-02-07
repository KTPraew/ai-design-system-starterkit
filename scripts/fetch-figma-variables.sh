#!/bin/bash

# Load from .env.local or use environment variable
FIGMA_TOKEN="${FIGMA_API_TOKEN}"
FILE_ID="eWPGtcV2Tr2NSYRm480O3u"

# Fetch all variables
curl -H "X-Figma-Token: ${FIGMA_TOKEN}" \
  "https://api.figma.com/v1/files/${FILE_ID}/variables/local"
