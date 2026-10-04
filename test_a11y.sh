#!/bin/bash
# Find files that have inputs without IDs or labels without `htmlFor`
echo "Checking inputs without IDs..."
grep -r "<input" app/ components/ | grep -v "id=" | head -n 5

echo "Checking labels without htmlFor..."
grep -r "<label" app/ components/ | grep -v "htmlFor=" | head -n 5
