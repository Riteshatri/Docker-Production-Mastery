# 🚀 **Docker, systemd & PID 1**

## 🧠 A Complete Deep‑Dive Book (Zero Shortcut Edition) - _Ritesh Sharma_

------------------------------------------------------------------------

> **Audience:** DevOps Engineers, Linux Engineers, Interview Candidates\
> **Goal:** Is document ko padhne ke baad tum *Docker + Linux internals
> confidently samjha sakoge*\
> **Style:** Slow • Deep • Story‑based • Practical

------------------------------------------------------------------------

## 🌟 Why this book exists

Aksar log: - Docker use kar lete hain
- Commands yaad kar lete hain
- Par **andar kya ho raha hai** nahi samajhte

Ye book us gap ko fill karti hai.

> ❝ *Agar tum PID 1 samajh gaye, to Docker tumhara ho gaya - **Ritesh Sharma*** ❞

------------------------------------------------------------------------

# 📚 Table of Contents

### PART 1 -- Foundations (Base banate hain)

1.  Computer, Program & Process
2.  Process lifecycle
3.  PID kya hota hai
4.  PID 1 -- system ka asli boss

### PART 2 -- Linux Internals (Andar tak)

5.  Linux process tree
6.  Zombie process kya hota hai
7.  Linux signals (SIGTERM vs SIGKILL)

### PART 3 -- Boot Process & systemd

8.  Linux boot flow (BIOS → Kernel → init)
9.  systemd kya hai (tod‑tod kar)
10. systemd = PID 1 (deep logic)
11. systemd components
12. Unit files & lifecycle

### PART 4 -- Ubuntu + Nginx Reality

13. `apt install` ke peeche kya hota hai
14. Ubuntu VM me nginx auto‑start kyun hota hai

### PART 5 -- Docker Internals (Most Important)

15. Docker asal me kya hai
16. Docker ≠ VM (sabse badi galatfehmi)
17. Container lifecycle
18. Docker me PID 1 kaise decide hota hai
19. systemctl Docker me kyun fail hota hai

### PART 6 -- Nginx + PID 1 (Core Concept)

20. nginx background vs foreground
21. `daemon off` ka asli matlab
22. docker stop vs docker kill
23. Bash PID 1 kyun dangerous hai
24. nginx PID 1 kyun best hai

### PART 7 -- Node + Nginx (Real World)

25. Node image ka role
26. Galat approach (real mistake)
27. Sahi approach (best practice)
28. Multi‑stage build philosophy

### PART 8 -- Windows & Kubernetes Mapping

29. Windows boot & Service Control Manager
30. Linux vs Windows service comparison
31. Kubernetes me PID 1 ka role

### PART 9 -- Final Mindset

32. Common misconceptions
33. Interview traps
34. Golden rules
35. Final mental model

------------------------------------------------------------------------

# PART 1 -- FOUNDATIONS

## 1️⃣ Computer, Program & Process

**Computer khud kuch nahi karta.**\
Wo sirf instructions execute karta hai.

-   **Program** → Disk par padi file
-   **Process** → Program jab RAM me chalta hai

Example: - `/usr/sbin/nginx` → Program
- `nginx running` → Process

------------------------------------------------------------------------

## 2️⃣ Process lifecycle

Har process ka ek life cycle hota hai:

    Create → Run → Wait → Exit

Operating System ka kaam: - process banana
- CPU dena
- memory dena
- process khatam karna

------------------------------------------------------------------------

## 3️⃣ PID kya hota hai

PID = **Process ID**\
Ek unique number jo OS har process ko deta hai.

Example: - PID 1
- PID 120
- PID 3567

------------------------------------------------------------------------

## 4️⃣ PID 1 -- system ka asli boss

PID 1: - Sabse pehla process
- Sab processes ka parent
- Zombie processes clean karta hai
- Signals handle karta hai
- Shutdown control karta hai

> ❗ Agar PID 1 galat ho → system ya container unstable

------------------------------------------------------------------------

# PART 2 -- LINUX INTERNALS

## 5️⃣ Linux process tree

    PID 1
     ├─ PID 50 (sshd)
     │   └─ PID 300 (bash)
     └─ PID 70 (nginx)

Sab processes upar jaakar **PID 1 pe end** hote hain.

------------------------------------------------------------------------

## 6️⃣ Zombie process kya hota hai

Zombie process: - Child process mar gaya
- Parent ne uska status collect nahi kiya

Iska cleanup: 👉 **PID 1 karta hai**

------------------------------------------------------------------------

## 7️⃣ Linux signals

Signal = OS ka message

  Signal    Matlab
  --------- ------------------
  SIGTERM   Aaram se band ho
  SIGKILL   Turant band ho

------------------------------------------------------------------------

# PART 3 -- BOOT PROCESS & SYSTEMD

## 8️⃣ Linux boot flow

1.  BIOS / UEFI
2.  Bootloader (GRUB)
3.  Kernel
4.  init
5.  systemd (PID 1)

------------------------------------------------------------------------

## 9️⃣ systemd kya hai

systemd: - Init system
- Service manager
- Dependency handler
- Logging controller

systemd **sirf command nahi**, poora framework hai.

------------------------------------------------------------------------

## 🔟 systemd = PID 1

systemd: - Sabse pehla process
- Sab services ka parent
- System ka brain

------------------------------------------------------------------------

## 1️⃣1️⃣ systemd components

-   systemctl
-   journald
-   logind
-   timers
-   targets

------------------------------------------------------------------------

## 1️⃣2️⃣ Unit files

Location:

    /etc/systemd/system
    /lib/systemd/system

Example:

    [Service]
    ExecStart=/usr/sbin/nginx
    Restart=always

------------------------------------------------------------------------

# PART 4 -- UBUNTU + NGINX

## 1️⃣3️⃣ `apt install` ke peeche

Jab tum likhte ho:

    apt install nginx

systemd: - service register karta hai
- turant start karta hai
- boot ke liye enable karta hai

------------------------------------------------------------------------

## 1️⃣4️⃣ Ubuntu VM me nginx auto‑start kyun

Kyunki: - systemd pehle se PID 1 hota hai
- service manager available hota hai

------------------------------------------------------------------------

# PART 5 -- DOCKER INTERNALS

## 1️⃣5️⃣ Docker asal me kya hai

Docker: - Process isolation tool
- OS nahi
- Kernel shared hota hai

------------------------------------------------------------------------

## 1️⃣6️⃣ Docker ≠ VM

❌ Docker = mini VM\
✅ Docker = process container

------------------------------------------------------------------------

## 1️⃣7️⃣ Container lifecycle

    create → start → run → stop → delete

------------------------------------------------------------------------

## 1️⃣8️⃣ Docker me PID 1 kaise decide hota hai

Jo command container start karti hai\
👉 **wahi PID 1 hoti hai**

------------------------------------------------------------------------

## 1️⃣9️⃣ systemctl Docker me kyun fail hota hai

Kyunki: - systemd exist nahi karta
- container boot nahi hota

------------------------------------------------------------------------

# PART 6 -- NGINX + PID 1

## 2️⃣0️⃣ nginx background vs foreground

Default: - nginx background me chala jata hai

Docker: - foreground process chahiye

------------------------------------------------------------------------

## 2️⃣1️⃣ `daemon off` ka matlab

nginx ko: - background me jaane se rokna
- foreground me rakhna

------------------------------------------------------------------------

## 2️⃣2️⃣ docker stop vs docker kill

  Command       Behaviour
  ------------- ------------------
  docker stop   SIGTERM → safe
  docker kill   SIGKILL → unsafe

------------------------------------------------------------------------

## 2️⃣3️⃣ Bash PID 1 kyun dangerous

bash: - signals forward nahi karta
- zombies clean nahi karta

------------------------------------------------------------------------

## 2️⃣4️⃣ nginx PID 1 kyun best

nginx: - signal aware
- graceful shutdown
- Docker‑friendly

------------------------------------------------------------------------

# PART 7 -- NODE + NGINX

## 2️⃣5️⃣ Node image ka role

Node: - Build ke liye
- Runtime ke liye nahi

------------------------------------------------------------------------

## 2️⃣6️⃣ Galat approach

    docker run node bash

❌ bash = PID 1

------------------------------------------------------------------------

## 2️⃣7️⃣ Sahi approach

    CMD ["nginx", "-g", "daemon off;"]

✅ nginx = PID 1

------------------------------------------------------------------------

## 2️⃣8️⃣ Multi‑stage build

Build alag\
Run alag\
Image clean

------------------------------------------------------------------------

# PART 8 -- WINDOWS & KUBERNETES

## 2️⃣9️⃣ Windows me systemd ka equivalent

Windows: - Service Control Manager (services.exe)

------------------------------------------------------------------------

## 3️⃣0️⃣ Kubernetes me PID 1

Pod: - Container lifecycle
- SIGTERM first
- Graceful shutdown

------------------------------------------------------------------------

# PART 9 -- FINAL MINDSET

## 3️⃣1️⃣ Common misconceptions

-   Docker = VM ❌
-   systemctl container me chalega ❌

------------------------------------------------------------------------

## 3️⃣2️⃣ Interview traps

Wrong: \> "Docker me systemd hota hai"

Correct: \> "Docker runs processes, not OS"

------------------------------------------------------------------------

## 3️⃣3️⃣ Golden rules

1.  Docker OS nahi hai
2.  PID 1 sabse important hai
3.  Foreground process zaroori hai

------------------------------------------------------------------------

## 3️⃣4️⃣ Final mental model

**systemd = OS ka brain**\
**Docker = process runner**

------------------------------------------------------------------------

# 🏁 END OF BOOK

> Agar tum ye book samjha sakte ho → tum Docker samajh gaye - **_RITESH SHARMA_**.
