/**
 * Minimalist Stable Logic
 * Portfolio - Tegar Desta Ariawan
 */

document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
});

/* ==========================================================================
   (GUI Simulator removed per user request)
   ========================================================================== */
/* ==========================================================================
   2. CONTACT FORM (NO ERRORS)
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('btn-submit');
            const originalText = btn.textContent;
            
            btn.textContent = 'Mengirim...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.textContent = 'Terkirim!';
                form.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                }, 2000);
            }, 1000);
        });
    }
}
