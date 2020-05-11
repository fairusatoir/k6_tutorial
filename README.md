Install
-------
### Linux
For Debian-based Linux distributions, you can install k6 from the private deb repo like this:
```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
```
```bash
echo "deb https://dl.bintray.com/loadimpact/deb stable main" | sudo tee -a /etc/apt/sources.list
```
```bash
sudo apt-get update
sudo apt-get install k6
```
Running
-------
### Linux
Standard output
```bash
k6 run script.js
```
Summary export json
```bash
$ k6 run --summary-export=export.json script.js
```



