/* ======================================
SpaceX Data Explorer
====================================== */
const ICONS = {
    rocket: '<svg width="20" height="20" viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
    target: '<svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    check: '<svg width="20" height="20" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
    package: '<svg width="20" height="20" viewBox="0 0 24 24"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
    search: '<svg width="16" height="16" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    calendar: '<svg width="14" height="14" viewBox="0 0 24 24"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>',
    layers: '<svg width="14" height="14" viewBox="0 0 24 24"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>',
    arrow: '<svg width="16" height="16" viewBox="0 0 24 24"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>',
    external: '<svg width="12" height="12" viewBox="0 0 24 24"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
    x: '<svg width="20" height="20" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    sun: '<svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
    moon: '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
    menu: '<svg width="20" height="20" viewBox="0 0 24 24"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
    chevDown: '<svg width="24" height="24" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>',
    ruler: '<svg width="14" height="14" viewBox="0 0 24 24"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>',
    weight: '<svg width="14" height="14" viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.23A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.46A2 2 0 0 0 17.48 8Z"/></svg>',
    dollar: '<svg width="14" height="14" viewBox="0 0 24 24"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    gauge: '<svg width="14" height="14" viewBox="0 0 24 24"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>',
    flame: '<svg width="14" height="14" viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
    satellite: '<svg width="28" height="28" viewBox="0 0 24 24"><path d="M13 7 8 2 2 8l5 5"/><path d="m17 11 5 5-6 6-5-5"/><path d="m8 13 4 4"/><path d="m12 9 4 4"/><circle cx="6" cy="18" r="3"/></svg>',
    globe: '<svg width="28" height="28" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
    moonIcon: '<svg width="28" height="28" viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
    compass: '<svg width="14" height="14" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
    grid: '<svg width="16" height="16" viewBox="0 0 24 24"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>',
    table: '<svg width="16" height="16" viewBox="0 0 24 24"><path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>',
    history: '<svg width="14" height="14" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>',
};

const API = 'https://api.spacexdata.com/v4';
const CACHE_TTL = 600000;
const cache = {};

async function apiFetch(endpoint) {
    const key = 'spacex_' + endpoint;
    const cached = cache[key];
    if (cached && Date.now() - cached.ts < CACHE_TTL) return cached.data;
    try {
        const stored = localStorage.getItem(key);
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Date.now() - parsed.ts < CACHE_TTL) {
                cache[key] = parsed;
                return parsed.data;
            }
        }
    } catch (e) { }
    const res = await fetch(API + endpoint);
    if (!res.ok) throw new Error('API error ' + res.status);
    const data = await res.json();
    const entry = { data, ts: Date.now() };
    cache[key] = entry;
    try { localStorage.setItem(key, JSON.stringify(entry)); } catch (e) { }
    return data;
}

let State = {
    theme: localStorage.getItem("spacex-theme") || "dark",
    rockets: [],
    launches: [],
    payloads: [],
    loading: {
        rockets: true,
        missions: true,
        payloads: true
    },
    vehicleFilter: "all",
    missionSearch: "",
    missionYear: "all",
    missionStatus: "all",
    missionPage: 1,
    payloadSearch: "",
    payloadOrbit: "all",
    payloadSort: "name",
    payloadView: "cards",
    modalRocket: null
};

function applyTheme() {
    document.body.classList.toggle('light', State.theme === 'light');
    localStorage.setItem('spacex-theme', State.theme);
}
applyTheme();

function observeAnims() {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.anim-in').forEach(el => obs.observe(el));
}

function initScroll() {
    const prog = document.getElementById('scroll-progress');
    const btn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        prog.style.width = (window.scrollY / h * 100) + '%';
        btn.classList.toggle('visible', window.scrollY > 400);
    }, {
        passive: true
    });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function renderNavbar() {
    const links = ["Home", "Vehicles", "Missions", "Payloads", "Explore"];
    const nav = document.querySelector("#navbar");

    nav.innerHTML = `
        <div class="nav-inner">
            <a href="#home" class="nav-brand"><span class="icon-wrap">${ICONS.rocket}</span>Space<span class="x">X</span></a>
            <div class="nav-links">${links.map(l => `<a href="#${l.toLowerCase()}">${l}</a>`).join('')}
                <div style="width:1px;height:20px;background:var(--border);margin:0 .5rem"></div>
                <button class="theme-btn" id="theme-toggle" aria-label="Toggle theme">${State.theme === 'dark' ? ICONS.sun : ICONS.moon}</button>
            </div>
            <button class="hamburger" id="hamburger">${ICONS.menu}</button>
        </div>
        <div class="mobile-menu" id="mobile-menu">${links.map(l => `<a href="#${l.toLowerCase()}">${l}</a>`).join('')}</div>
    `;

    document.querySelector("#theme-toggle").addEventListener("click", () => {
        State.theme = State.theme === "dark" ? "light" : "dark";

        applyTheme();
        renderNavbar();
    });

    document.querySelector("#hamburger").addEventListener("click", () => {
        document.querySelector("#mobile-menu").classList.toggle("open");
    });

    document.querySelectorAll(".mobile-menu a").forEach(a => {
        a.addEventListener("click", () => document.querySelector("#mobile-menu").classList.remove("open"));
    })

    window.addEventListener("scroll", () => {
        nav.classList.toggle("scrolled", window.scrollY > 20);
    }, {
        passive: true
    });
}

function highlightNav() {
    const sections = ["home", "vehicles", "missions", "payloads", "explore"];
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                document.querySelectorAll(".nav-links a, .mobile-menu a").forEach(a => {
                    a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id);
                });
            }
        })
    }, {
        threshold: 0.3,
        rootMargin: "-80px 0px 0px 0px"
    });

    sections.forEach(s => { const el = document.getElementById(s); if (el) obs.observe(el); });
}

function animateCounter(el, target, duration = 2500) {
    if (target === 0) {
        el.textContent = '0';
        return;
    }

    const start = performance.now();

    function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.floor(eased * target).toLocaleString();
        if (p < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}

function renderHero() {
    const particles = Array.from({ length: 80 }, () => {
        const s = Math.random() * 3 + .5;
        return `<div class="particle${s > 2 ? ' bright' : ''}" style="width:${s}px;height:${s}px;top:${Math.random() * 100}%;left:${Math.random() * 100}%;animation:twinkle ${Math.random() * 4 + 2}s ease-in-out infinite;animation-delay:${Math.random() * 4}s"></div>`;
    }).join('');

    return `
        <section id="home" class="hero">
            <div class="hero-bg"></div>
            <div class="hero-radial1"></div>
            <div class="hero-radial2"></div>
            <div class="particles">${particles}</div>
            <div class="orbital-rings">
                <div class="ring"></div>
                <div class="ring"></div>
                <div class="ring"></div>
            </div>
            <div class="hero-content">
                <div class="anim-in">
                    <div class="hero-badge"><span class="dot"></span>Live Data • SpaceX API</div>
                    <h1>Space<span class="gradient">X</span></h1>
                    <div class="subtitle">Data Explorer</div>
                    <p class="desc">Dive into real-time SpaceX mission data. Track launches, explore rockets, and discover
                        payloads delivered across the solar system.</p>
                    <div class="hero-buttons">
                        <a href="#vehicles" class="btn-primary">Explore Vehicles</a>
                        <a href="#missions" class="btn-outline">View Missions</a>
                    </div>
                </div>
                <div class="stats-grid anim-in">
                    <div class="stat-card">${ICONS.target}<div class="value" id="stat-launches">0</div>
                        <div class="label">Total Launches</div>
                    </div>
                    <div class="stat-card">${ICONS.check}<div class="value" id="stat-success">0</div>
                        <div class="label">Successful</div>
                    </div>
                    <div class="stat-card">${ICONS.rocket}<div class="value" id="stat-rockets">0</div>
                        <div class="label">Rockets</div>
                    </div>
                    <div class="stat-card">${ICONS.package}<div class="value" id="stat-payloads">0</div>
                        <div class="label">Payloads</div>
                    </div>
                </div>
            </div>
            <div class="scroll-hint">${ICONS.chevDown}</div>
        </section>
    `;
}

function updateStats() {
    const statsObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                animateCounter(document.querySelector("#stat-launches"), State.launches.length);
                animateCounter(document.querySelector("#stat-success"), State.launches.filter(l => l.success === true).length);
                animateCounter(document.querySelector("#stat-rockets"), State.rockets.length);
                animateCounter(document.querySelector("#stat-payloads"), State.payloads.length);
                statsObs.unobserve(e.target);
            }
        });
    }, {
        threshold: 0.3
    });

    const grid = document.querySelector(".stats-grid");
    if (grid) statsObs.observe(grid);
}

function renderVehicles() {
    const skeletons = State.loading.rockets ? Array.from({ length: 4 }, () => `
        <div class="card">
            <div class="skeleton" style="height:13rem"></div>
            <div style="padding:1.25rem">
                <div class="skeleton" style="height:1.2rem;width:75%;margin-bottom:.75rem"></div>
                <div class="skeleton" style="height:1rem;width:50%;margin-bottom:.75rem"></div>
                <div class="skeleton" style="height:1rem;width:100%"></div>
            </div>
        </div>
    `).join("") : "";

    const filtered = State.rockets.filter(r => {
        if (State.vehicleFilter === "active") return r.active;
        if (State.vehicleFilter === "inactive") return !r.active;
        return true;
    });

    const cards = filtered.map((r, i) => `
        <div class="card anim-in" style="transition-delay:${i * .1}s" data-rocket-id="${r.id}">
            <div class="card-img">${r.flickr_images[0] ? `<img src="${r.flickr_images[0]}" alt="${r.name}" loading="lazy">` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center">${ICONS.flame}</div>`}
                <div class="overlay"></div>
                <div class="badge"><span class="${r.active ? 'badge-success' : 'badge-failure'}">${r.active ? 'Active' : 'Retired'}</span></div>
            </div>
            <div class="card-body">
                <h3>${r.name}<span class="arrow">${ICONS.arrow}</span></h3>
                <div class="card-meta"><span>${ICONS.calendar} ${r.first_flight}</span><span>${ICONS.layers} ${r.stages}
                        stages</span></div>
                <div class="card-desc">${r.description}</div>
            </div>
        </div>
    `).join("");

    return `
        <section id="vehicles" class="section">
            <div class="section-inner">
                <div class="section-header anim-in">
                    <div class="section-badge">${ICONS.flame} Fleet</div>
                    <h2>Vehicles & Rockets</h2>
                    <p>Explore SpaceX's fleet of revolutionary rockets designed to make space accessible.</p>
                </div>
                <div class="controls anim-in">
                    ${['all', 'active', 'inactive'].map(f => `<button class="filter-btn${State.vehicleFilter === f ? ' active' : ''}" data-vf="${f}">${f}</button>`).join('')}
                </div>
                <div class="cards-grid cols-4">${State.loading.rockets ? skeletons : cards}</div>
                ${filtered.length === 0 && !State.loading.rockets ? '<div class="empty-State"><p>No rockets match the current filter.</p></div>' : ''}
            </div>
        </section>
    `;
}

function renderMissions() {
    const rocketMap = {};

    State.rockets.forEach(r => rocketMap[r.id] = r.name);

    const years = [...new Set(State.launches.map(l => new Date(l.date_utc).getFullYear()))].sort((a, b) => b - a);

    let filtered = State.launches.filter(l => {
        if (State.missionSearch && !l.name.toLowerCase().includes(State.missionSearch.toLowerCase())) return false;
        if (State.missionYear !== "all" && new Date(l.date_utc).getFullYear() !== +State.missionYear) return false;
        if (State.missionStatus === "success" && l.success !== true) return false;
        if (State.missionStatus === "failure" && l.success !== false) return false;
        return true;
    }).sort((a, b) => new Date(b.date_utc) - new Date(a.date_utc));

    const pageSize = 12;
    const paginated = filtered.slice(0, State.missionPage * pageSize);
    const hasMore = paginated.length < filtered.length;

    const skeletons = State.loading.launches ? Array.from({ length: 8 }, () => `
        <div class="card">
            <div class="skeleton" style="height:10rem"></div>
            <div style="padding:1.25rem">
                <div class="skeleton" style="height:1rem;width:70%;margin-bottom:.6rem"></div>
                <div class="skeleton" style="height:.8rem;width:50%;margin-bottom:.6rem"></div>
                <div class="skeleton" style="height:.8rem;width:40%"></div>
            </div>
        </div>
    `).join("") : "";

    const cards = paginated.map(l => {
        const date = new Date(l.date_utc).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric"
        });

        const statusIcon = localStorage.success === true ? `<svg width="20" height="20" viewBox="0 0 24 24" style="color:hsl(152,69%,50%);filter:drop-shadow(0 2px 4px rgba(0,0,0,.3))"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>` : l.success === false ? `<svg width="20" height="20" viewBox="0 0 24 24" style="color:hsl(0,72%,51%);filter:drop-shadow(0 2px 4px rgba(0,0,0,.3))"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>` : "";

        return `
            <div class="card mission-card">
                <div class="card-img">${l.links.patch.small ? `<img src="${l.links.patch.small}" alt="${l.name}" loading="lazy">` : `
                    <div class="placeholder">
                        <div style="padding:1rem;border-radius:1rem;background:hsla(215,90%,58%,.05)">${ICONS.rocket}</div>
                    </div>
                `}
                ${statusIcon ? `<div class="status-icon">${statusIcon}</div>` : ''}</div>
                <div class="card-body">
                    <h3 style="font-size:.875rem;margin-bottom:.5rem">${l.name}</h3>
                    <div class="card-meta">${ICONS.calendar} ${date}</div>
                    <div style="font-size:.75rem;color:var(--muted-fg);margin-bottom:.6rem"><span style="opacity:.6">Rocket:</span>
                        ${rocketMap[l.rocket] || 'Unknown'}</div>
                    <div style="display:flex;align-items:center;justify-content:space-between">
                        ${l.success !== null ? `<span class="${l.success ? 'badge-success' : 'badge-failure'}">${l.success ? 'Success' : 'Failed'}</span>` : '<span></span>'}
                        <div class="card-links">${l.links.webcast ? `<a href="${l.links.webcast}" target="_blank" rel="noopener">${ICONS.external} Watch</a>` : ''}</div>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    return `
        <section id="missions" class="section alt-bg">
            <div class="section-inner">
                <div class="section-header anim-in">
                    <div class="section-badge">${ICONS.history} History</div>
                    <h2>Missions</h2>
                    <p>Every launch in SpaceX history — search, filter, and explore detailed mission data.</p>
                </div>
                <div class="controls anim-in">
                    <div class="search-wrap">${ICONS.search}<input type="text" placeholder="Search missions..."
                            id="mission-search" value="${State.missionSearch}"></div>
                    <select class="filter-select" id="mission-year">
                        <option value="all">All Years</option>${years.map(y => `<option value="${y}" ${State.missionYear == y ? ' selected' : ''}>${y}</option>`).join('')}
                    </select>
                    <select class="filter-select" id="mission-status">
                        <option value="all">All Status</option>
                        <option value="success" ${State.missionStatus === 'success' ? ' selected' : ''}>Success</option>
                        <option value="failure" ${State.missionStatus === 'failure' ? ' selected' : ''}>Failure</option>
                    </select>
                    ${filtered.length ? `<span class="result-count">${filtered.length} results</span>` : ''}
                </div>
                <div class="cards-grid cols-4">${State.loading.launches ? skeletons : cards}</div>
                ${!State.loading.launches && filtered.length === 0 ? `
                    <div class="empty-State">
                        <svg width="48" height="48" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                        <p>No missions match your search.</p>
                    </div>
                ` : ""}
                ${hasMore ? `<div class="load-more"><button id="load-more-missions">Load More (${filtered.length - paginated.length} remaining)</button></div>` : ''}
            </div>
        </section>
    `;
}

function renderPayloads() {
    const orbits = [...new Set(State.payloads.map(p => p.orbit).filter(Boolean))].sort();

    let filtered = State.payloads.filter(p => {
        if (State.payloadSearch && !(p.name || "").toLowerCase().includes(State.payloadSearch.toLowerCase())) return false;
        if (State.payloadOrbit !== "all" && p.orbit !== State.payloadOrbit) return false;
        return true;
    }).sort((a, b) => {
        const k = State.payloadSort;
        const av = (k === "name" ? a.name : k === "orbit" ? a.orbit : a.type) || "";
        const bv = (k === "name" ? b.name : k === "orbit" ? b.orbit : b.type) || "";
        return av.localeCompare(bv);
    });

    const displayed = filtered.slice(0, 50);

    const skeletons = State.loading.payloads ? Array.from({ length: 6 }, () => `
        <div class="card" style="border-radius:1rem">
            <div style="padding:1.5rem">
                <div class="skeleton" style="height:1.2rem;width:75%;margin-bottom:.75rem"></div>
                <div class="skeleton" style="height:1rem;width:50%;margin-bottom:.75rem"></div>
                <div class="skeleton" style="height:1rem;width:100%"></div>
            </div>
        </div>
    `).join("") : "";

    const cardView = displayed.map(p => `
        <div class="card payload-card">
            <div class="card-body">
                <div class="card-header">
                    <div class="icon">${ICONS.package}</div>
                    <div>
                        <h3>${p.name || 'Unknown'}</h3>
                        <p>${p.type || 'N/A'}</p>
                    </div>
                </div>
                <div class="info-grid">
                    <div class="info-cell">
                        <div class="lbl">Orbit</div>
                        <div class="val">${p.orbit || 'N/A'}</div>
                    </div>
                    <div class="info-cell">
                        <div class="lbl">Mass</div>
                        <div class="val">${p.mass_kg ? p.mass_kg.toLocaleString() + ' kg' : 'N/A'}</div>
                    </div>
                    <div class="info-cell full">
                        <div class="lbl">Customer</div>
                        <div class="val" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.customers.join(',') || 'N/A'}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    const tableView = `
        <div class="payload-table-wrap">
            <table class="payload-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Orbit</th>
                        <th>Mass (kg)</th>
                        <th>Customer</th>
                    </tr>
                </thead>
                <tbody>${displayed.map(p => `
                    <tr>
                        <td style="font-weight:600">
                            ${p.name || 'Unknown'}
                        </td>
                        <td style="color:var(--muted-fg)">
                            ${p.type || 'N/A'}
                        </td>
                        <td><span class="badge-orbit">
                            ${p.orbit || 'N/A'}
                        </span></td>
                        <td style="color:var(--muted-fg)">
                            ${p.mass_kg ? p.mass_kg.toLocaleString() : 'N/A'}
                        </td>
                        <td style="color:var(--muted-fg);max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                            ${p.customers.join(', ') || 'N/A'}
                        </td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>
    `;

    return `
        <section id="payloads" class="section">
            <div class="section-inner">
                <div class="section-header anim-in">
                    <div class="section-badge">${ICONS.package} Cargo</div>
                    <h2>Payloads</h2>
                    <p>Every payload delivered to orbit, categorized and searchable.</p>
                </div>
                <div class="controls anim-in">
                    <div class="search-wrap">${ICONS.search}<input type="text" placeholder="Search payloads..."
                            id="payload-search" value="${State.payloadSearch}"></div>
                    <select class="filter-select" id="payload-orbit">
                        <option value="all">All Orbits</option>${orbits.map(o => `<option value="${o}" ${State.payloadOrbit === o ? ' selected' : ''}>${o}</option>`).join('')}
                    </select>
                    <select class="filter-select" id="payload-sort">
                        <option value="name" ${State.payloadSort === 'name' ? ' selected' : ''}>Sort: Name</option>
                        <option value="orbit" ${State.payloadSort === 'orbit' ? ' selected' : ''}>Sort: Orbit</option>
                        <option value="type" ${State.payloadSort === 'type' ? ' selected' : ''}>Sort: Type</option>
                    </select>
                    <div class="view-toggle"><button id="view-cards"
                            class="${State.payloadView === 'cards' ? 'active' : ''}">${ICONS.grid}</button><button
                            id="view-table" class="${State.payloadView === 'table' ? 'active' : ''}">${ICONS.table}</button>
                    </div>
                </div>
                ${State.loading.payloads ? `<div class="cards-grid cols-3">${skeletons}</div>` : State.payloadView === 'cards' ? `<div class="cards-grid cols-3">${cardView}</div>` : tableView}
                ${!State.loading.payloads && filtered.length === 0 ? `<div class="empty-State">${ICONS.package}<p>No payloads match your criteria.</p>
                </div>` : ''}
                ${filtered.length > 50 ? `<p style="text-align:center;margin-top:2rem;font-size:.875rem;color:var(--muted-fg)">Showing 50 of ${filtered.length} payloads.</p>` : ''}
            </div>
        </section>
    `;
}

function renderExplore() {
    const starlink = State.payloads.filter(p => (p.name || '').toLowerCase().includes('starlink')).length;
    const mars = State.launches.filter(l => l.name.toLowerCase().includes('mars') || l.details?.toLowerCase().includes('mars')).length;
    const moon = State.launches.filter(l => l.name.toLowerCase().includes('moon') || l.name.toLowerCase().includes('lunar') || l.details?.toLowerCase().includes('moon')).length;

    const items = [
        {
            icon: ICONS.satellite,
            title: 'Starlink Constellation',
            desc: 'Building the world\'s largest satellite internet constellation to provide broadband connectivity globally.',
            stat: `${starlink}+ Satellites`,
            grad: 'linear-gradient(135deg,hsl(215,90%,58%),hsl(190,80%,55%))',
            iconBg: 'hsla(215,90%,58%,.1)',
            iconColor: 'hsl(215,90%,70%)'
        },
        {
            icon: ICONS.globe,
            title: 'Mars Missions',
            desc: 'Working toward making humanity a multi-planetary species with missions targeting the Red Planet.',
            stat: `${mars} Related Launches`,
            grad: 'linear-gradient(135deg,hsl(25,90%,55%),hsl(0,72%,51%))',
            iconBg: 'hsla(25,90%,55%,.1)',
            iconColor: 'hsl(25,90%,65%)'
        },
        {
            icon: ICONS.moonIcon,
            title: 'Lunar Exploration',
            desc: 'Supporting lunar exploration through commercial and governmental partnerships.',
            stat: `${moon} Related Launches`,
            grad: 'linear-gradient(135deg,hsl(260,70%,58%),hsl(230,80%,55%))',
            iconBg: 'hsla(260,70%,58%,.1)',
            iconColor: 'hsl(260,70%,70%)'
        },
        {
            icon: ICONS.rocket,
            title: 'Reusability Pioneer',
            desc: 'Revolutionizing spaceflight through reusable rocket technology, drastically reducing launch costs.',
            stat: 'First in History',
            grad: 'linear-gradient(135deg,hsl(152,69%,41%),hsl(170,70%,45%))',
            iconBg: 'hsla(152,69%,41%,.1)',
            iconColor: 'hsl(152,69%,55%)'
        }
    ];

    return `
        <section id="explore" class="section alt-bg">
            <div class="section-inner">
                <div class="section-header anim-in">
                    <div class="section-badge">${ICONS.compass} Discover</div>
                    <h2>Explore SpaceX</h2>
                    <p>From Starlink to Mars — discover the ambitious programs pushing the boundaries of space exploration.</p>
                </div>
                <div class="explore-grid">${items.map((it, i) => `<div class="explore-card anim-in"
                        style="transition-delay:${.2 + i * .12}s">
                        <div class="top-line" style="background:${it.grad}"></div>
                        <div class="bg-grad" style="background:${it.grad}"></div>
                        <div class="icon-box" style="background:${it.iconBg};color:${it.iconColor}">${it.icon}</div>
                        <h3>${it.title}</h3>
                        <p>${it.desc}</p>
                        <span class="badge-orbit">${it.stat}</span>
                    </div>`).join('')}</div>
            </div>
        </section>
    `;
}

function renderFooter() {
    const ts = cache['spacex_/launches']?.ts;
    const lastUpdated = ts ? new Date(ts).toLocaleString() : 'N/A';

    return `
        <footer class="footer">
            <div class="footer-inner">
                <a href="#home" class="nav-brand"><span class="icon-wrap">${ICONS.rocket}</span>Space<span class="x">X</span>Explorer</a>
                <div class="footer-links">${['Home', 'Vehicles', 'Missions', 'Payloads', 'Explore'].map(l => `<a href="#${l.toLowerCase()}">${l}</a>`).join('')}</div>
                <div class="footer-divider"></div>
                <div class="footer-info">Data from <a href="https://github.com/r-spacex/SpaceX-API" target="_blank" style="color:var(--primary)">SpaceX API</a> • Last updated: ${lastUpdated}<br>Built with HTML, CSS & Vanilla JavaScript</div>
            </div>
        </footer>
    `;
}

function renderModal() {
    const r = State.modalRocket;
    if (!r) return '';

    const details = [
        {
            icon: ICONS.ruler,
            label: 'Height',
            value: `${r.height.meters}m / ${r.height.feet}ft`
        },
        {
            icon: ICONS.weight,
            label: 'Mass',
            value: `${r.mass.kg.toLocaleString()} kg`
        },
        {
            icon: ICONS.dollar,
            label: 'Cost/Launch',
            value: `$${(r.cost_per_launch / 1e6).toFixed(0)}M`
        },
        {
            icon: ICONS.gauge,
            label: 'Success Rate',
            value: `${r.success_rate_pct}%`
        }
    ];

    return `
        <div class="modal-backdrop"></div>
        <div class="modal">
            <button class="modal-close" id="modal-close">${ICONS.x}</button>
            ${r.flickr_images[0] ? `<div class="modal-img"><img src="${r.flickr_images[0]}" alt="${r.name}">
                <div class="fade"></div>
            </div>` : ''}
            <div class="modal-body">
                <div
                    style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1rem;flex-wrap:wrap;gap:.5rem">
                    <div>
                        <h2>${r.name}</h2>
                        <div class="sub">${r.type} • First flight: ${r.first_flight}</div>
                    </div>
                    <span class="${r.active ? 'badge-success' : 'badge-failure'}">${r.active ? 'Active' : 'Retired'}</span>
                </div>
                <div class="desc">${r.description}</div>
                <div class="detail-grid">${details.map(d => `<div class="detail-cell">
                        <div class="lbl">${d.icon} ${d.label}</div>
                        <div class="val">${d.value}</div>
                    </div>`).join('')}</div>
                ${r.payload_weights.length ? `<div class="payload-weights">
                    <h3>Payload Capacity</h3>${r.payload_weights.map(pw => `<div class="pw-row">
                        <span>${pw.name}</span><span>${pw.kg.toLocaleString()} kg</span></div>`).join('')}
                </div>` : ''}
                ${r.flickr_images.length > 1 ? `<div class="gallery" style="margin-top:1.5rem">
                    <h3>Gallery</h3>
                    <div class="gallery-grid">${r.flickr_images.slice(1, 4).map((img, i) => `<img src="${img}"
                            alt="${r.name} ${i + 2}" loading="lazy">`).join('')}</div>
                </div>` : ''}
                ${r.wikipedia ? `<a href="${r.wikipedia}" target="_blank" class="wiki-link">${ICONS.external} View on
                    Wikipedia</a>` : ''}
            </div>
        </div>
    `;
}

function openModal(rocketId) {
    const r = State.rockets.find(x => x.id === rocketId);
    if (!r) return;

    State.modalRocket = r;

    const overlay = document.getElementById('modal-overlay');
    overlay.innerHTML = renderModal();
    requestAnimationFrame(() => overlay.classList.add('open'));

    document.body.style.overflow = 'hidden';

    overlay.querySelector('.modal-backdrop').addEventListener('click', closeModal);
    overlay.querySelector('#modal-close').addEventListener('click', closeModal);
    overlay.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function closeModal() {
    State.modalRocket = null;

    const overlay = document.getElementById('modal-overlay');

    overlay.classList.remove('open');
    document.body.style.overflow = '';

    setTimeout(() => { overlay.innerHTML = ''; }, 300);
}

function render() {
    const app = document.getElementById('app');
    app.innerHTML = renderHero() + renderVehicles() + renderMissions() + renderPayloads() + renderExplore() + renderFooter();
    bindEvents();
    observeAnims();
    updateStats();
}

function bindEvents() {
    document.querySelectorAll('[data-vf]').forEach(btn => {
        btn.addEventListener('click', () => { State.vehicleFilter = btn.dataset.vf; render(); });
    });
    document.querySelectorAll('[data-rocket-id]').forEach(card => {
        card.addEventListener('click', () => openModal(card.dataset.rocketId));
    });
    const ms = document.getElementById('mission-search');
    if (ms) {
        let t;
        ms.addEventListener('input', e => { clearTimeout(t); t = setTimeout(() => { State.missionSearch = e.target.value; State.missionPage = 1; render(); ms.focus(); }, 400); });
    }
    const my = document.getElementById('mission-year');
    if (my) my.addEventListener('change', e => { State.missionYear = e.target.value; State.missionPage = 1; render(); });
    const mst = document.getElementById('mission-status');
    if (mst) mst.addEventListener('change', e => { State.missionStatus = e.target.value; State.missionPage = 1; render(); });
    const lm = document.getElementById('load-more-missions');
    if (lm) lm.addEventListener('click', () => { State.missionPage++; render(); });
    // Payload controls
    const ps = document.getElementById('payload-search');
    if (ps) ps.addEventListener('input', e => { State.payloadSearch = e.target.value; render(); ps.focus(); });
    const po = document.getElementById('payload-orbit');
    if (po) po.addEventListener('change', e => { State.payloadOrbit = e.target.value; render(); });
    const pso = document.getElementById('payload-sort');
    if (pso) pso.addEventListener('change', e => { State.payloadSort = e.target.value; render(); });
    const vc = document.getElementById('view-cards');
    if (vc) vc.addEventListener('click', () => { State.payloadView = 'cards'; render(); });
    const vt = document.getElementById('view-table');
    if (vt) vt.addEventListener('click', () => { State.payloadView = 'table'; render(); });
}

async function init() {
    renderNavbar();
    initScroll();
    render();

    const [rockets, launches, payloads] = await Promise.all([
        apiFetch('/rockets').catch(() => []),
        apiFetch('/launches').catch(() => []),
        apiFetch('/payloads').catch(() => []),
    ]);
    State.rockets = rockets;
    State.launches = launches;
    State.payloads = payloads;
    State.loading = { rockets: false, launches: false, payloads: false };
    render();
}
init();