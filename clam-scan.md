# Clam Scan
Reference article: [Link Here](https://thesecmaster.com/how-to-install-clamav-on-linux-mint/)

## Installing clam av
1. Update Linux Minx
```bash
sudo apt update && sudo apt upgrade -y
```
2. Install ClamAV and ClamDaemon on Linux Mint

```bash
sudo apt install clamav clamav-daemon
```
3. Check version to see if it is installed

```bash
clamscan --version
```

4. Update the ClamAV Signature database

```bash
sudo systemctl stop clamav-freshclam
sudo freshclam
sudo systemctl start clamav-freshclam
```

5. Start freshclam service

```bash
sudo systemctl start clamav-freshclam
```
- Run this command to start freshclam service at boot.

```bash
$ sudo systemctl enable clamav-freshclam
```

## Common clam av commands

### run clam scan recursively on current directory (sound bell if virus detected)
```bash
clamscan -vr --bell .
```
### run clam scan on all files and folders
```bash
clamscan -r /
```
### run scan and print only infected files in current directory
```bash
clamscan -infected .
```
