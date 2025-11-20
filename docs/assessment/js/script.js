

const controls = [
    // AC - Access Control (22 controls)
    { id: 'AC-1', family: 'AC', title: 'Access Control Policy', description: 'Develop, document, and disseminate access control policy to all staff.' },
    { id: 'AC-2', family: 'AC', title: 'Account Management', description: 'Create, enable, disable, and remove system accounts per policy.' },
    { id: 'AC-2(1)', family: 'AC', title: 'Account Management - Privileged', description: 'Manage privileged accounts with automatic logging and MFA.' },
    { id: 'AC-2(2)', family: 'AC', title: 'Account Management - Removal', description: 'Remove accounts within 24 hours of termination/transfer.' },
    { id: 'AC-2(3)', family: 'AC', title: 'Account Management - Inactive', description: 'Review accounts at least annually for inactive or unnecessary accounts.' },
    { id: 'AC-3', family: 'AC', title: 'Access Enforcement', description: 'Enforce approved authorizations using RBAC or ABAC mechanisms.' },
    { id: 'AC-5', family: 'AC', title: 'Separation of Duties', description: 'Prevent users from having mutually exclusive duties.' },
    { id: 'AC-6', family: 'AC', title: 'Least Privilege', description: 'Limit user access to minimum necessary for assigned duties.' },
    { id: 'AC-6(1)', family: 'AC', title: 'Least Privilege - Authorized', description: 'Log and review all privileged access commands and outputs.' },
    { id: 'AC-6(10)', family: 'AC', title: 'Least Privilege - Prevent Execution', description: 'Prevent unprivileged users from executing privileged functions.' },
    { id: 'AC-7', family: 'AC', title: 'Unsuccessful Login Attempts', description: 'Limit failed login attempts and lock accounts after threshold.' },
    { id: 'AC-8', family: 'AC', title: 'System Use Notification', description: 'Display system use notification banner requiring user acknowledgment.' },
    { id: 'AC-10', family: 'AC', title: 'Concurrent Session Control', description: 'Limit concurrent sessions per user account.' },
    { id: 'AC-11', family: 'AC', title: 'Session Lock', description: 'Lock sessions after 15 minutes of inactivity.' },
    { id: 'AC-12', family: 'AC', title: 'Session Termination', description: 'Automatically terminate sessions after inactivity period.' },
    { id: 'AC-14', family: 'AC', title: 'Permitted Actions Without ID', description: 'Restrict unauthenticated access to publicly available functions only.' },
    { id: 'AC-17', family: 'AC', title: 'Remote Access', description: 'Establish usage restrictions and security requirements for remote access.' },
    { id: 'AC-17(1)', family: 'AC', title: 'Remote Access - Monitoring', description: 'Monitor and control remote access sessions.' },
    { id: 'AC-17(2)', family: 'AC', title: 'Remote Access - Encryption', description: 'Protect remote access with encryption (TLS 1.2 or higher).' },
    { id: 'AC-19', family: 'AC', title: 'Mobile Device Access', description: 'Control access from mobile devices processing CUI.' },
    { id: 'AC-20', family: 'AC', title: 'External Systems', description: 'Establish terms and conditions for external access to systems.' },
    { id: 'AC-20(1)', family: 'AC', title: 'External Systems - Limits', description: 'Limit external access and define approved information transfer.' },

    // AU - Audit & Accountability (14 controls)
    { id: 'AU-1', family: 'AU', title: 'Audit Policy', description: 'Develop and implement audit and accountability policy.' },
    { id: 'AU-2', family: 'AU', title: 'Audit Events', description: 'Determine which events require auditing (logons, changes, privileges).' },
    { id: 'AU-3', family: 'AU', title: 'Audit Record Content', description: 'Ensure audit records contain user ID, type, date/time, and outcome.' },
    { id: 'AU-3(1)', family: 'AU', title: 'Audit - User Identity', description: 'Generate audit records identifying the user for each event.' },
    { id: 'AU-4', family: 'AU', title: 'Audit Storage Capacity', description: 'Maintain audit logs for at least 90 days without overwriting.' },
    { id: 'AU-5', family: 'AU', title: 'Audit Failure Handling', description: 'Alert administrators when audit processing fails.' },
    { id: 'AU-6', family: 'AU', title: 'Audit Review, Analysis, Reporting', description: 'Review audit records at least monthly for unauthorized activity.' },
    { id: 'AU-6(1)', family: 'AU', title: 'Audit - Automated Integration', description: 'Integrate audit with IDS and monitoring tools for alerts.' },
    { id: 'AU-6(3)', family: 'AU', title: 'Audit - Coordinated Monitoring', description: 'Coordinate monitoring across systems to identify patterns.' },
    { id: 'AU-7', family: 'AU', title: 'Audit Reduction and Reporting', description: 'Generate reports from audit records.' },
    { id: 'AU-8', family: 'AU', title: 'Time Stamps', description: 'Use internal clocks synchronized via NTP for audit timestamps.' },
    { id: 'AU-9', family: 'AU', title: 'Audit Protection', description: 'Protect audit information from unauthorized access or deletion.' },
    { id: 'AU-11', family: 'AU', title: 'Audit Retention', description: 'Retain audit logs for 90 days on system, 1 year offline.' },
    { id: 'AU-12', family: 'AU', title: 'Audit Generation', description: 'Provide system capability to generate audit records.' },

    // IA - Identification & Authentication (15 controls)
    { id: 'IA-1', family: 'IA', title: 'ID & Authentication Policy', description: 'Develop identification and authentication policy.' },
    { id: 'IA-2', family: 'IA', title: 'User Identification & Authentication', description: 'Implement mechanisms to uniquely identify and authenticate users.' },
    { id: 'IA-2(1)', family: 'IA', title: 'MFA for Privileged Accounts', description: 'Require multi-factor authentication for privileged accounts.' },
    { id: 'IA-2(2)', family: 'IA', title: 'MFA for CUI Systems', description: 'Require MFA for all privileged access to CUI systems.' },
    { id: 'IA-4', family: 'IA', title: 'Identifier Management', description: 'Manage user identifiers and prevent reuse.' },
    { id: 'IA-5', family: 'IA', title: 'Authenticator Management', description: 'Establish authenticator selection and management standards.' },
    { id: 'IA-5(1)', family: 'IA', title: 'Password-Based Authentication', description: 'Enforce minimum 15 characters, complexity, history, and 60-day expiration.' },
    { id: 'IA-5(2)', family: 'IA', title: 'PKI Certificates', description: 'Implement and manage PKI certificates.' },
    { id: 'IA-5(3)', family: 'IA', title: 'In-Person Registration', description: 'Require in-person or trusted third-party registration for authenticators.' },
    { id: 'IA-5(4)', family: 'IA', title: 'Automated Password Management', description: 'Use automated tools to manage passwords.' },
    { id: 'IA-5(6)', family: 'IA', title: 'Authenticator Protection', description: 'Protect authenticators from theft, loss, and compromise.' },
    { id: 'IA-5(7)', family: 'IA', title: 'No Embedded Authenticators', description: 'Do not embed unencrypted static authenticators in code/docs.' },
    { id: 'IA-5(11)', family: 'IA', title: 'Hardware-Based Authentication', description: 'Consider hardware-based authenticators (smartcards, tokens).' },
    { id: 'IA-6', family: 'IA', title: 'Authentication Mechanism Protection', description: 'Obscure feedback during authentication process.' },
    { id: 'IA-8', family: 'IA', title: 'Non-Organizational User Authentication', description: 'Authenticate third-party/contractor access.' },

    // SC - System & Communications Protection (18 controls)
    { id: 'SC-1', family: 'SC', title: 'System & Communications Policy', description: 'Develop system and communications protection policy.' },
    { id: 'SC-7', family: 'SC', title: 'Boundary Protection', description: 'Implement firewalls and boundary protection devices.' },
    { id: 'SC-7(3)', family: 'SC', title: 'Boundary - Access Points', description: 'Limit external connections to managed access points.' },
    { id: 'SC-7(5)', family: 'SC', title: 'Boundary - Deny by Default', description: 'Implement deny-all, allow-by-exception firewall rules.' },
    { id: 'SC-7(8)', family: 'SC', title: 'Boundary - Route Traffic', description: 'Route internal communications through boundary devices.' },
    { id: 'SC-7(12)', family: 'SC', title: 'Boundary - Host-Based Protection', description: 'Implement host-based firewall on boundary systems.' },
    { id: 'SC-7(20)', family: 'SC', title: 'Boundary - Port/Protocol Restrictions', description: 'Disable unnecessary ports, protocols, and services.' },
    { id: 'SC-8', family: 'SC', title: 'Transmission Confidentiality & Integrity', description: 'Protect transmitted information through encryption.' },
    { id: 'SC-8(1)', family: 'SC', title: 'Transmission - Cryptographic', description: 'Implement TLS 1.2 or higher for network communications.' },
    { id: 'SC-10', family: 'SC', title: 'Network Disconnect', description: 'Terminate remote access connections after 15 minutes inactivity.' },
    { id: 'SC-12', family: 'SC', title: 'Cryptographic Key Management', description: 'Establish cryptographic key generation, storage, and retirement processes.' },
    { id: 'SC-12(1)', family: 'SC', title: 'Key Management - Availability', description: 'Maintain availability of cryptographic keys for recovery.' },
    { id: 'SC-13', family: 'SC', title: 'Cryptographic Protection', description: 'Use NIST-approved cryptographic algorithms.' },
    { id: 'SC-15', family: 'SC', title: 'Collaborative Computing Devices', description: 'Disable collaborative devices or put in non-recording mode.' },
    { id: 'SC-17', family: 'SC', title: 'Public Key Infrastructure', description: 'Implement PKI policies, procedures, and controls.' },
    { id: 'SC-28', family: 'SC', title: 'Information at Rest Protection', description: 'Encrypt information at rest.' },
    { id: 'SC-28(1)', family: 'SC', title: 'Information at Rest - Cryptographic', description: 'Use NIST-approved cryptography for information at rest.' },
    { id: 'SC-39', family: 'SC', title: 'Process Isolation', description: 'Maintain separate execution domains for processes.' },

    // SI - System & Information Integrity (15 controls)
    { id: 'SI-1', family: 'SI', title: 'System Integrity Policy', description: 'Develop system and information integrity policy.' },
    { id: 'SI-2', family: 'SI', title: 'Flaw Remediation', description: 'Identify and correct software/firmware flaws timely.' },
    { id: 'SI-3', family: 'SI', title: 'Malicious Code Protection', description: 'Implement antivirus software on all systems.' },
    { id: 'SI-3(1)', family: 'SI', title: 'Malicious Code - Centralized', description: 'Implement centrally-managed malware protection with auto-updates.' },
    { id: 'SI-4', family: 'SI', title: 'System Monitoring', description: 'Monitor systems for attacks and unauthorized use.' },
    { id: 'SI-4(1)', family: 'SI', title: 'System Monitoring - Intrusion Detection', description: 'Deploy IDS/IPS to monitor network communications.' },
    { id: 'SI-4(2)', family: 'SI', title: 'System Monitoring - Automated Tools', description: 'Use automated tools to monitor systems and networks.' },
    { id: 'SI-4(4)', family: 'SI', title: 'System Monitoring - Communications', description: 'Monitor inbound/outbound communications for unusual activity.' },
    { id: 'SI-4(5)', family: 'SI', title: 'System Monitoring - Alerts', description: 'Generate alerts when security events detected.' },
    { id: 'SI-5', family: 'SI', title: 'Security Alerts & Advisories', description: 'Subscribe to and respond to security alerts from appropriate sources.' },
    { id: 'SI-7', family: 'SI', title: 'Software Integrity', description: 'Monitor and maintain software and information integrity.' },
    { id: 'SI-7(1)', family: 'SI', title: 'Software Integrity - Verification', description: 'Use integrity verification tools to detect unauthorized changes.' },
    { id: 'SI-10', family: 'SI', title: 'Information System Monitoring', description: 'Establish records for system monitoring activities.' },
    { id: 'SI-12', family: 'SI', title: 'Information Handling & Retention', description: 'Manage information throughout its lifecycle.' },
    { id: 'SI-16', family: 'SI', title: 'Memory Protection', description: 'Implement mechanisms to protect against code execution at unauthorized memory addresses.' },

    // CM - Configuration Management (16 controls)
    { id: 'CM-1', family: 'CM', title: 'Configuration Management Policy', description: 'Develop configuration management policy.' },
    { id: 'CM-2', family: 'CM', title: 'Baseline Configuration', description: 'Develop and document baseline configurations.' },
    { id: 'CM-2(1)', family: 'CM', title: 'Baseline - Reviews & Updates', description: 'Review and update baseline configurations.' },
    { id: 'CM-2(2)', family: 'CM', title: 'Baseline - Automation', description: 'Use automated mechanisms to maintain baselines.' },
    { id: 'CM-3', family: 'CM', title: 'Configuration Change Control', description: 'Establish and implement change control procedures.' },
    { id: 'CM-3(1)', family: 'CM', title: 'Change Control - Documentation', description: 'Use automated mechanisms to document changes.' },
    { id: 'CM-3(2)', family: 'CM', title: 'Change Control - Testing', description: 'Test changes before implementation.' },
    { id: 'CM-5', family: 'CM', title: 'Access Restrictions for Change', description: 'Restrict access to change procedures and tools.' },
    { id: 'CM-5(1)', family: 'CM', title: 'Change - Automated Enforcement', description: 'Use automated mechanisms to enforce change access restrictions.' },
    { id: 'CM-6', family: 'CM', title: 'Configuration Settings', description: 'Establish and enforce mandatory configuration settings.' },
    { id: 'CM-7', family: 'CM', title: 'Least Functionality', description: 'Disable unnecessary ports, protocols, and services.' },
    { id: 'CM-7(1)', family: 'CM', title: 'Least Functionality - Review', description: 'Review systems periodically to eliminate unnecessary functions.' },
    { id: 'CM-7(2)', family: 'CM', title: 'Least Functionality - Deactivation', description: 'Automatically disable unnecessary functions and services.' },
    { id: 'CM-8', family: 'CM', title: 'System Component Inventory', description: 'Develop and maintain accurate system inventory.' },
    { id: 'CM-8(1)', family: 'CM', title: 'Inventory - Updates', description: 'Update inventory when systems installed, updated, or removed.' },
    { id: 'CM-8(3)', family: 'CM', title: 'Inventory - Automation', description: 'Use automated mechanisms to maintain inventory.' },

    // MP - Media Protection (6 controls)
    { id: 'MP-1', family: 'MP', title: 'Media Protection Policy', description: 'Develop media protection policy.' },
    { id: 'MP-2', family: 'MP', title: 'Media Access', description: 'Restrict access to system media.' },
    { id: 'MP-4', family: 'MP', title: 'Media Storage', description: 'Physically control and securely store media.' },
    { id: 'MP-5', family: 'MP', title: 'Media Transport', description: 'Protect media during transport outside controlled areas.' },
    { id: 'MP-6', family: 'MP', title: 'Media Sanitization', description: 'Sanitize media before reuse or disposal.' },
    { id: 'MP-7', family: 'MP', title: 'Usable Media', description: 'Prohibit unauthorized removable media.' },

    // PE - Physical & Environmental Protection (15 controls)
    { id: 'PE-1', family: 'PE', title: 'Physical Protection Policy', description: 'Develop physical and environmental protection policy.' },
    { id: 'PE-2', family: 'PE', title: 'Physical Entry', description: 'Control facility access with badges, guards, and logs.' },
    { id: 'PE-3', family: 'PE', title: 'Physical Lockdown', description: 'Enforce physical access restrictions to CUI areas.' },
    { id: 'PE-4', family: 'PE', title: 'Physical Access Monitoring', description: 'Monitor and control facility access.' },
    { id: 'PE-5', family: 'PE', title: 'Output Device Access', description: 'Control access to output devices (printers, monitors).' },
    { id: 'PE-6', family: 'PE', title: 'Physical Intrusion Monitoring', description: 'Monitor for physical intrusions and unauthorized access.' },
    { id: 'PE-8', family: 'PE', title: 'Visitor Access Records', description: 'Maintain visitor logs and escort procedures.' },
    { id: 'PE-9', family: 'PE', title: 'Power Equipment & Cabling', description: 'Protect power equipment and ensure redundant supplies.' },
    { id: 'PE-10', family: 'PE', title: 'Emergency Shutoff', description: 'Provide manual emergency power shutoff capability.' },
    { id: 'PE-11', family: 'PE', title: 'Emergency Power', description: 'Provide UPS for critical systems.' },
    { id: 'PE-12', family: 'PE', title: 'Emergency Lighting', description: 'Provide emergency lighting for exit routes.' },
    { id: 'PE-13', family: 'PE', title: 'Fire Protection', description: 'Implement fire detection and suppression systems.' },
    { id: 'PE-14', family: 'PE', title: 'Temperature & Humidity', description: 'Maintain appropriate environmental conditions.' },
    { id: 'PE-15', family: 'PE', title: 'Water Damage Protection', description: 'Protect systems from water damage.' },
    { id: 'PE-16', family: 'PE', title: 'Delivery & Removal', description: 'Control delivery and removal of equipment.' },

    // PL - Planning (4 controls)
    { id: 'PL-1', family: 'PL', title: 'Planning Policy', description: 'Develop security planning policy.' },
    { id: 'PL-2', family: 'PL', title: 'System Security Plan', description: 'Develop and review System Security Plan annually.' },
    { id: 'PL-4', family: 'PL', title: 'Rules of Behavior', description: 'Establish and require acknowledgment of rules of behavior.' },
    { id: 'PL-8', family: 'PL', title: 'Security Architecture', description: 'Develop information security architecture.' },

    // SA - System & Services Acquisition (7 controls)
    { id: 'SA-1', family: 'SA', title: 'Acquisition Policy', description: 'Develop system and services acquisition policy.' },
    { id: 'SA-3', family: 'SA', title: 'System Development Life Cycle', description: 'Include security in SDLC processes.' },
    { id: 'SA-4', family: 'SA', title: 'Acquisition Process', description: 'Include security requirements in acquisition contracts.' },
    { id: 'SA-4(10)', family: 'SA', title: 'Software Assurance', description: 'Require vendor software assurance evidence.' },
    { id: 'SA-5', family: 'SA', title: 'System Documentation', description: 'Obtain required system documentation.' },
    { id: 'SA-9', family: 'SA', title: 'External System Services', description: 'Establish control requirements for external services.' },
    { id: 'SA-9(2)', family: 'SA', title: 'External Services Monitoring', description: 'Monitor service provider compliance.' },

    // PS - Personnel Security (7 controls)
    { id: 'PS-1', family: 'PS', title: 'Personnel Security Policy', description: 'Develop personnel security policy.' },
    { id: 'PS-3', family: 'PS', title: 'Personnel Screening', description: 'Conduct background investigations before granting access.' },
    { id: 'PS-4', family: 'PS', title: 'Personnel Termination', description: 'Disable accounts and remove access within 24 hours.' },
    { id: 'PS-5', family: 'PS', title: 'Personnel Transfer', description: 'Review and update access rights during transfers.' },
    { id: 'PS-6', family: 'PS', title: 'Access Agreements', description: 'Require signed access agreements.' },
    { id: 'PS-7', family: 'PS', title: 'Third-Party Personnel', description: 'Establish security requirements for contractors.' },
    { id: 'PS-8', family: 'PS', title: 'Personnel Sanctions', description: 'Establish personnel sanctions process for violations.' },

    // IR - Incident Response (10 controls)
    { id: 'IR-1', family: 'IR', title: 'Incident Response Policy', description: 'Develop incident response policy.' },
    { id: 'IR-2', family: 'IR', title: 'Incident Response Training', description: 'Provide incident response training annually.' },
    { id: 'IR-3', family: 'IR', title: 'Incident Response Testing', description: 'Test incident response capability at least annually.' },
    { id: 'IR-4', family: 'IR', title: 'Incident Handling', description: 'Implement incident handling and recovery processes.' },
    { id: 'IR-4(1)', family: 'IR', title: 'Incident Handling - Automation', description: 'Use automated incident handling mechanisms.' },
    { id: 'IR-5', family: 'IR', title: 'Incident Monitoring', description: 'Monitor and track security incidents.' },
    { id: 'IR-6', family: 'IR', title: 'Incident Reporting', description: 'Report incidents to appropriate authorities (FBI/CISA).' },
    { id: 'IR-7', family: 'IR', title: 'Incident Response Assistance', description: 'Provide incident response support services.' },
    { id: 'IR-8', family: 'IR', title: 'Incident Response Plan', description: 'Develop and update incident response plan.' },
    { id: 'IR-9', family: 'IR', title: 'Information Spillage Response', description: 'Respond to unauthorized information disclosures.' },

    // MA - Maintenance (5 controls)
    { id: 'MA-1', family: 'MA', title: 'Maintenance Policy', description: 'Develop maintenance policy.' },
    { id: 'MA-2', family: 'MA', title: 'Maintenance Controlled', description: 'Supervise or monitor maintenance activities.' },
    { id: 'MA-3', family: 'MA', title: 'Maintenance Tools', description: 'Inspect and control maintenance tools.' },
    { id: 'MA-4', family: 'MA', title: 'Remote Maintenance', description: 'Use secure remote sessions for maintenance.' },
    { id: 'MA-5', family: 'MA', title: 'Maintenance Personnel', description: 'Establish security requirements for maintenance staff.' },

    // CP - Contingency Planning (8 controls)
    { id: 'CP-1', family: 'CP', title: 'Contingency Planning Policy', description: 'Develop contingency planning policy.' },
    { id: 'CP-2', family: 'CP', title: 'Contingency Plan', description: 'Develop business continuity and disaster recovery plan.' },
    { id: 'CP-2(1)', family: 'CP', title: 'Contingency Plan - Roles', description: 'Define roles and responsibilities for contingency planning.' },
    { id: 'CP-2(3)', family: 'CP', title: 'Contingency Plan - Essential Missions', description: 'Develop procedures to resume essential missions.' },
    { id: 'CP-3', family: 'CP', title: 'Contingency Training', description: 'Provide contingency training at least annually.' },
    { id: 'CP-4', family: 'CP', title: 'Contingency Plan Testing', description: 'Test contingency plan at least annually.' },
    { id: 'CP-9', family: 'CP', title: 'System Backup', description: 'Conduct full backups weekly, incremental daily, store offsite.' },
    { id: 'CP-10', family: 'CP', title: 'System Recovery', description: 'Recover and reconstitute systems to secure state.' },

    // RA - Risk Assessment (2 controls)
    { id: 'RA-1', family: 'RA', title: 'Risk Assessment Policy', description: 'Develop risk assessment policy.' },
    { id: 'RA-3', family: 'RA', title: 'Risk Assessment', description: 'Conduct risk assessments every three years.' }
];

const familyInfo = {
    'AC': { name: 'Access Control', icon: '🔐' },
    'AU': { name: 'Audit & Accountability', icon: '📋' },
    'IA': { name: 'Identification & Authentication', icon: '👤' },
    'SC': { name: 'System & Communications', icon: '🔒' },
    'SI': { name: 'System & Information Integrity', icon: '🛡️' },
    'CM': { name: 'Configuration Management', icon: '⚙️' },
    'MP': { name: 'Media Protection', icon: '💾' },
    'PE': { name: 'Physical & Environmental', icon: '🏢' },
    'PL': { name: 'Planning', icon: '📊' },
    'SA': { name: 'System & Services Acquisition', icon: '🛒' },
    'PS': { name: 'Personnel Security', icon: '👥' },
    'IR': { name: 'Incident Response', icon: '🚨' },
    'MA': { name: 'Maintenance', icon: '🔧' },
    'CP': { name: 'Contingency Planning', icon: '💼' },
    'RA': { name: 'Risk Assessment', icon: '📈' }
};

let assessmentData = {};
let currentFilter = 'all';
let expandedCategories = {};

function init() {
    loadAssessmentData();
    renderControls();
    updateStats();
}

function loadAssessmentData() {
    const saved = localStorage.getItem('cmmc-assessment');
    if (saved) {
        assessmentData = JSON.parse(saved);
    }
}

function saveAssessmentData() {
    localStorage.setItem('cmmc-assessment', JSON.stringify(assessmentData));
    updateStats();
}

function renderControls() {
    const list = document.getElementById('controlsList');
    list.innerHTML = '';

    const families = {};
    controls.forEach(control => {
        if (!families[control.family]) {
            families[control.family] = [];
            if (!(control.family in expandedCategories)) {
                expandedCategories[control.family] = true;
            }
        }
        families[control.family].push(control);
    });

    Object.keys(families).sort().forEach(family => {
        const familyControls = families[family];
        const info = familyInfo[family];
        const isExpanded = expandedCategories[family];
        const met = familyControls.filter(c => assessmentData[c.id]?.status === 'met').length;

        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'category-container';
        categoryContainer.setAttribute('data-family', family);

        const header = document.createElement('div');
        header.className = 'category-header';
        header.setAttribute('data-family', family);
        header.onclick = function() { toggleCategory(family); };

        header.innerHTML = `
            <div class="category-header-left">
                <span class="category-icon">${info.icon}</span>
                <div class="category-info">
                    <div class="category-family">${family} - ${info.name}</div>
                    <div class="category-stats">${met}/${familyControls.length} met</div>
                </div>
            </div>
            <div class="category-toggle ${isExpanded ? 'expanded' : ''}">⬇️</div>
        `;

        const body = document.createElement('div');
        body.className = `category-body ${!isExpanded ? 'collapsed' : ''}`;
        body.id = `category-${family}`;

        familyControls.forEach(control => {
            const data = assessmentData[control.id] || { status: '', notes: '' };
            const statusClass = data.status ? data.status : '';

            const item = document.createElement('div');
            item.className = `control-item ${statusClass}`;
            item.id = `control-${control.id}`;
            item.setAttribute('data-status', data.status || '');
            item.setAttribute('data-family', family);

            let statusBadge = '';
            if (data.status) {
                statusBadge = `<span class="control-status-badge ${data.status}">${capitalize(data.status)}</span>`;
            }

            item.innerHTML = `
                <div class="control-header">
                    <span class="control-id">${control.id}</span>
                    ${statusBadge}
                </div>
                <div class="control-title">${control.title}</div>
                <div class="control-description">${control.description}</div>
                <div class="control-actions">
                    <button class="status-btn met ${data.status === 'met' ? 'selected' : ''}" onclick="setStatus('${control.id}', 'met')">✅ Met</button>
                    <button class="status-btn not-met ${data.status === 'not-met' ? 'selected' : ''}" onclick="setStatus('${control.id}', 'not-met')">❌ Not Met</button>
                    <button class="status-btn na ${data.status === 'na' ? 'selected' : ''}" onclick="setStatus('${control.id}', 'na')">⊘ N/A</button>
                    <button class="status-btn other ${data.status === 'other' ? 'selected' : ''}" onclick="setStatus('${control.id}', 'other')">❓ Other</button>
                </div>
                <div class="notes-section">
                    <label class="notes-label">Notes:</label>
                    <textarea class="notes-input" placeholder="Add findings or evidence..." onchange="setNotes('${control.id}', this.value)">${data.notes || ''}</textarea>
                </div>
            `;

            if (shouldHideControl(control, data)) {
                item.classList.add('hidden');
            }

            body.appendChild(item);
        });

        categoryContainer.appendChild(header);
        categoryContainer.appendChild(body);
        list.appendChild(categoryContainer);
    });
}

function shouldHideControl(control, data) {
    if (currentFilter === 'all') return false;
    if (currentFilter === 'unassessed') return !!data.status;
    if (currentFilter === 'met') return data.status !== 'met';
    if (currentFilter === 'not-met') return data.status !== 'not-met';
    if (currentFilter === 'na') return data.status !== 'na';
    return false;
}

function toggleCategory(family) {
    expandedCategories[family] = !expandedCategories[family];
    const body = document.getElementById(`category-${family}`);
    const header = document.querySelector(`[data-family="${family}"].category-header`);
    const toggle = header ? header.querySelector('.category-toggle') : null;

    if (body) body.classList.toggle('collapsed');
    if (toggle) toggle.classList.toggle('expanded');
}

function expandAllCategories() {
    Object.keys(expandedCategories).forEach(family => {
        expandedCategories[family] = true;
        const body = document.getElementById(`category-${family}`);
        const header = document.querySelector(`[data-family="${family}"].category-header`);
        const toggle = header ? header.querySelector('.category-toggle') : null;

        if (body) body.classList.remove('collapsed');
        if (toggle) toggle.classList.add('expanded');
    });
}

function collapseAllCategories() {
    Object.keys(expandedCategories).forEach(family => {
        expandedCategories[family] = false;
        const body = document.getElementById(`category-${family}`);
        const header = document.querySelector(`[data-family="${family}"].category-header`);
        const toggle = header ? header.querySelector('.category-toggle') : null;

        if (body) body.classList.add('collapsed');
        if (toggle) toggle.classList.remove('expanded');
    });
}

function setStatus(controlId, status) {
    if (!assessmentData[controlId]) {
        assessmentData[controlId] = { status: '', notes: '' };
    }
    assessmentData[controlId].status = status;
    saveAssessmentData();
    renderControls();
}

function setNotes(controlId, notes) {
    if (!assessmentData[controlId]) {
        assessmentData[controlId] = { status: '', notes: '' };
    }
    assessmentData[controlId].notes = notes;
    saveAssessmentData();
}

function filterControls(filter) {
    currentFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
    });
    renderControls();
}

function updateStats() {
    const met = Object.values(assessmentData).filter(d => d.status === 'met').length;
    const notMet = Object.values(assessmentData).filter(d => d.status === 'not-met').length;
    const total = 110;
    const percentage = Math.round((met / total) * 100);

    document.getElementById('metControls').textContent = met;
    document.getElementById('notMetControls').textContent = notMet;
    document.getElementById('metPercentage').textContent = `${Math.round((met / total) * 100)}%`;
    document.getElementById('notMetPercentage').textContent = `${Math.round((notMet / total) * 100)}%`;
    document.getElementById('score').textContent = met;
    document.getElementById('progressBar').style.width = percentage + '%';
    document.getElementById('progressBar').textContent = percentage + '%';
}

function resetAssessment() {
    if (confirm('Reset all assessments? This cannot be undone.')) {
        assessmentData = {};
        localStorage.removeItem('cmmc-assessment');
        currentFilter = 'all';
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-filter') === 'all');
        });
        renderControls();
        updateStats();
    }
}

function downloadPDF() {
    alert('PDF export feature coming soon. Export as JSON for now.');
}

function exportJSON() {
    const data = {
        timestamp: new Date().toISOString(),
        summary: {
            totalControls: 110,
            metControls: Object.values(assessmentData).filter(d => d.status === 'met').length,
            notMetControls: Object.values(assessmentData).filter(d => d.status === 'not-met').length
        },
        assessments: assessmentData
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CMMC-Assessment-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
}

function capitalize(str) {
    return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
}

window.addEventListener('DOMContentLoaded', init);