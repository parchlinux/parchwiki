If you are expriencing some audio problems on parch linux you can use the code below in order to fix the audio problem:

` sudo bash -c "echo 'options snd-hda-intel model=auto position_fix=0' >> /etc/modprobe.d/alsa-base.conf ` `` 