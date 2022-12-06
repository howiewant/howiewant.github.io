# ArchLinux 安装指南

:::tip 安装文档
https://wiki.archlinux.org/title/installation_guide  
Arch 的 wiki 上写的很全面，仔细阅读后基本都能安装成功
:::

## 网络设置

arch 的安装需要互联网络，首先要确保机器可以连接到互联网

## 磁盘分区

1. 磁盘分区

```shell
fdisk -l # 查看磁盘
fdisk /dev/disk_name # 磁盘分区
```

2. 格式化磁盘

```shell
mkfs.fat -F 32 /dev/efi_system_partition
mkfs.ext4 /dev/root_partition
```

3. 挂载分区

```shell
mount /dev/root_partition /mnt
mkdir /mnt/boot
mount /dev/efi_system_partition /mnt/boot
```

## 安装

```shell
pacstrap -K /mnt base base-devel linux linux-firmware
```

安装完内核系统后记得安装网络管理所需要的程序，否则无法联网的 archlinux 使用起来会非常痛苦
推荐安装 NetworkManager

## 配置系统

### Fstab 静态文件系统信息

```shell
genfstab -U /mnt >> /mnt/etc/fstab
```

`cat /mnt/etc/fstab` 查看文件内容是否正确

### chroot 到新系统

```shell
arch-chroot /mnt
```

强烈建议在之前的安装步骤安装一个编辑器

### 时区设置

```shell
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
hwclock --systohc
```

### 本地化

1. `/etc/locale.gen` 取消注释 `en_US.UTF-8 UTF-8`
2. 执行 `locale-gen`
3. `echo "LANG=en_US.UTF-8" >> /etc/locale.conf`

### 网络设置

1. `echo "myhostname" >> /etc/hostname`
2. 编辑 `/etc/hosts`

```
127.0.0.1       localhost
::1             localhost
127.0.0.1       myhostname.localdomain myhostname
```

### 修改密码

`passwd`

## 安装引导程序

```
pacman -S grub efibootmgr amd-ucode
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
grub-mkconfig -o /boot/grub/grub.cfg
```

`amd-ucode` 或者 `intel-ucode` 根据 cpu 选择

## 重启进入 arch
