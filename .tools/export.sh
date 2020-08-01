set -eu

python3 -m http.server 3000 -d public 2> /dev/null &

echo "wait for waking HTTP Server..."
until $(curl --output /dev/null --silent --head --fail localhost:3000); do
  sleep 1
done

for page in `seq 0 $(grep -cE '^-{3,}$' index.mdx)`; do
  website-pdf "http://localhost:3000#${page}" -w 1920 -h 1080 -o `printf ".export/%03d.pdf" $page` & pids[${page}]=$!
done

for pid in ${pids[*]}; do
  wait $pid
done

convert .export/*.pdf output.pdf
echo "saved PDF to $(pwd)/output.pdf"

lsof -ti:3000 | xargs kill -9
