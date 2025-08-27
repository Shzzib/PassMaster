
// Shared helpers for multi-page app
function qs(sel){return document.querySelector(sel)}
function qsa(sel){return Array.from(document.querySelectorAll(sel))}
function saveUsers(obj){ localStorage.setItem('app_users', JSON.stringify(obj)) }
function loadUsers(){ return JSON.parse(localStorage.getItem('app_users')||'{}') }
function nowISO(){ return new Date().toISOString() }
function formatLocal(dt){ try{return new Date(dt).toLocaleString()}catch(e){return dt} }
