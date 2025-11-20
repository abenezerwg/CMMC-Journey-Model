

controls = [
    // AC - Access Control (22 controls)
    { id: 'AC.L2-3.1.1', family: 'AC', title: 'Authorized Access Control [CUI Data]', description: 'Limit system access to authorized users, processes acting on behalf of authorized users, and devices (including other systems).' },
    { id: 'AC.L2-3.1.2', family: 'AC', title: 'Transaction & Function Control', description: 'Limit system access to the types of transactions and functions that authorized users are permitted to execute.' },
    { id: 'AC.L2-3.1.3', family: 'AC', title: 'Control CUI Flow', description: 'Control the flow of CUI in accordance with approved authorizations.' },
    { id: 'AC.L2-3.1.4', family: 'AC', title: 'Separation of Duties', description: 'Separate the duties of individuals to reduce the risk of malevolent activity without collusion.' },
    { id: 'AC.L2-3.1.5', family: 'AC', title: 'Least Privilege', description: 'Employ the principle of least privilege, including for specific security functions and privileged accounts.' },
    { id: 'AC.L2-3.1.6', family: 'AC', title: 'Non-Privileged Account Use', description: 'Use non-privileged accounts or roles when accessing nonsecurity functions.' },
    { id: 'AC.L2-3.1.7', family: 'AC', title: 'Privileged Functions', description: 'Prevent non-privileged users from executing privileged functions and capture the execution of such functions in audit logs.' },
    { id: 'AC.L2-3.1.8', family: 'AC', title: 'Unsuccessful Logon Attempts', description: 'Limit unsuccessful logon attempts.' },
    { id: 'AC.L2-3.1.9', family: 'AC', title: 'Privacy & Security Notices', description: 'Provide privacy and security notices consistent with applicable CUI rules.' },
    { id: 'AC.L2-3.1.10', family: 'AC', title: 'Session Lock', description: 'Use session lock with pattern-hiding displays to prevent access and viewing of data after a period of inactivity.' },
    { id: 'AC.L2-3.1.11', family: 'AC', title: 'Session Termination', description: 'Terminate (automatically) a user session after a defined condition.' },
    { id: 'AC.L2-3.1.12', family: 'AC', title: 'Control Remote Access', description: 'Monitor and control remote access sessions.' },
    { id: 'AC.L2-3.1.13', family: 'AC', title: 'Remote Access Confidentiality', description: 'Employ cryptographic mechanisms to protect the confidentiality of remote access sessions.' },
    { id: 'AC.L2-3.1.14', family: 'AC', title: 'Remote Access Routing', description: 'Route remote access via managed access control points.' },
    { id: 'AC.L2-3.1.15', family: 'AC', title: 'Privileged Remote Access', description: 'Authorize remote execution of privileged commands and remote access to security-relevant information.' },
    { id: 'AC.L2-3.1.16', family: 'AC', title: 'Wireless Access Authorization', description: 'Authorize wireless access prior to allowing such connections.' },
    { id: 'AC.L2-3.1.17', family: 'AC', title: 'Wireless Access Protection', description: 'Protect wireless access using authentication and encryption.' },
    { id: 'AC.L2-3.1.18', family: 'AC', title: 'Mobile Device Connection', description: 'Control connection of mobile devices.' },
    { id: 'AC.L2-3.1.19', family: 'AC', title: 'Encrypt CUI on Mobile', description: 'Encrypt CUI on mobile devices and mobile computing platforms.' },
    { id: 'AC.L2-3.1.20', family: 'AC', title: 'External Connections [CUI Data]', description: 'Verify and control/limit connections to and use of external systems.' },
    { id: 'AC.L2-3.1.21', family: 'AC', title: 'Portable Storage Use', description: 'Limit use of portable storage devices on external systems.' },
    { id: 'AC.L2-3.1.22', family: 'AC', title: 'Control Public Information [CUI Data]', description: 'Control CUI posted or processed on publicly accessible systems.' },

    // AT - Awareness and Training (3 controls)
    { id: 'AT.L2-3.2.1', family: 'AT', title: 'Role-Based Risk Awareness', description: 'Ensure that managers, systems administrators, and users of organizational systems are made aware of the security risks associated with their activities and of the applicable policies, standards, and procedures related to the security of those systems.' },
    { id: 'AT.L2-3.2.2', family: 'AT', title: 'Role-Based Training', description: 'Ensure that personnel are trained to carry out their assigned information security-related duties and responsibilities.' },
    { id: 'AT.L2-3.2.3', family: 'AT', title: 'Insider Threat Awareness', description: 'Provide security awareness training on recognizing and reporting potential indicators of insider threat.' },

    // AU - Audit & Accountability (9 controls)
    { id: 'AU.L2-3.3.1', family: 'AU', title: 'System Auditing', description: 'Create and retain system audit logs and records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity.' },
    { id: 'AU.L2-3.3.2', family: 'AU', title: 'User Accountability', description: 'Ensure that the actions of individual system users can be uniquely traced to those users so they can be held accountable for their actions.' },
    { id: 'AU.L2-3.3.3', family: 'AU', title: 'Event Review', description: 'Review and update logged events.' },
    { id: 'AU.L2-3.3.4', family: 'AU', title: 'Audit Failure Alerting', description: 'Alert in the event of an audit logging process failure.' },
    { id: 'AU.L2-3.3.5', family: 'AU', title: 'Audit Correlation', description: 'Correlate audit record review, analysis, and reporting processes for investigation and response to indications of unlawful, unauthorized, suspicious, or unusual activity.' },
    { id: 'AU.L2-3.3.6', family: 'AU', title: 'Reduction & Reporting', description: 'Provide audit record reduction and report generation to support on-demand analysis and reporting.' },
    { id: 'AU.L2-3.3.7', family: 'AU', title: 'Authoritative Time Source', description: 'Provide a system capability that compares and synchronizes internal system clocks with an authoritative source to generate time stamps for audit records.' },
    { id: 'AU.L2-3.3.8', family: 'AU', title: 'Audit Protection', description: 'Protect audit information and audit logging tools from unauthorized access, modification, and deletion.' },
    { id: 'AU.L2-3.3.9', family: 'AU', title: 'Audit Management', description: 'Limit management of audit logging functionality to a subset of privileged users.' },

    // CM - Configuration Management (9 controls)
    { id: 'CM.L2-3.4.1', family: 'CM', title: 'System Baselining', description: 'Establish and maintain baseline configurations and inventories of organizational systems (including hardware, software, firmware, and documentation) throughout the respective system development life cycles.' },
    { id: 'CM.L2-3.4.2', family: 'CM', title: 'Security Configuration Enforcement', description: 'Establish and enforce security configuration settings for information technology products employed in organizational systems.' },
    { id: 'CM.L2-3.4.3', family: 'CM', title: 'System Change Management', description: 'Track, review, approve or disapprove, and log changes to organizational systems.' },
    { id: 'CM.L2-3.4.4', family: 'CM', title: 'Security Impact Analysis', description: 'Analyze the security impact of changes prior to implementation.' },
    { id: 'CM.L2-3.4.5', family: 'CM', title: 'Access Restrictions for Change', description: 'Define, document, approve, and enforce physical and logical access restrictions associated with changes to organizational systems.' },
    { id: 'CM.L2-3.4.6', family: 'CM', title: 'Least Functionality', description: 'Employ the principle of least functionality by configuring organizational systems to provide only essential capabilities.' },
    { id: 'CM.L2-3.4.7', family: 'CM', title: 'Nonessential Functionality', description: 'Restrict, disable, or prevent the use of nonessential programs, functions, ports, protocols, and services.' },
    { id: 'CM.L2-3.4.8', family: 'CM', title: 'Application Execution Policy', description: 'Apply deny-by-exception (blacklisting) policy to prevent the use of unauthorized software or deny-all, permit-by-exception (whitelisting) policy to allow the execution of authorized software.' },
    { id: 'CM.L2-3.4.9', family: 'CM', title: 'User-Installed Software', description: 'Control and monitor user-installed software.' },

    // IA - Identification & Authentication (11 controls)
    { id: 'IA.L2-3.5.1', family: 'IA', title: 'Identification [CUI Data]', description: 'Identify system users, processes acting on behalf of users, and devices.' },
    { id: 'IA.L2-3.5.2', family: 'IA', title: 'Authentication [CUI Data]', description: 'Authenticate (or verify) the identities of users, processes, or devices, as a prerequisite to allowing access to organizational systems.' },
    { id: 'IA.L2-3.5.3', family: 'IA', title: 'Multifactor Authentication', description: 'Use multifactor authentication for local and network access to privileged accounts and for network access to non-privileged accounts.' },
    { id: 'IA.L2-3.5.4', family: 'IA', title: 'Replay-Resistant Authentication', description: 'Employ replay-resistant authentication mechanisms for network access to privileged and non-privileged accounts.' },
    { id: 'IA.L2-3.5.5', family: 'IA', title: 'Identifier Reuse', description: 'Prevent reuse of identifiers for a defined period.' },
    { id: 'IA.L2-3.5.6', family: 'IA', title: 'Identifier Handling', description: 'Disable identifiers after a defined period of inactivity.' },
    { id: 'IA.L2-3.5.7', family: 'IA', title: 'Password Complexity', description: 'Enforce a minimum password complexity and change of characters when new passwords are created.' },
    { id: 'IA.L2-3.5.8', family: 'IA', title: 'Password Reuse', description: 'Prohibit password reuse for a specified number of generations.' },
    { id: 'IA.L2-3.5.9', family: 'IA', title: 'Temporary Passwords', description: 'Allow temporary password use for system logons with an immediate change to a permanent password.' },
    { id: 'IA.L2-3.5.10', family: 'IA', title: 'Cryptographically-Protected Passwords', description: 'Store and transmit only cryptographically-protected passwords.' },
    { id: 'IA.L2-3.5.11', family: 'IA', title: 'Obscure Feedback', description: 'Obscure feedback of authentication information.' },

    // IR - Incident Response (3 controls)
    { id: 'IR.L2-3.6.1', family: 'IR', title: 'Incident Handling', description: 'Establish an operational incident-handling capability for organizational systems that includes preparation, detection, analysis, containment, recovery, and user response activities.' },
    { id: 'IR.L2-3.6.2', family: 'IR', title: 'Incident Reporting', description: 'Track, document, and report incidents to designated officials and/or authorities both internal and external to the organization.' },
    { id: 'IR.L2-3.6.3', family: 'IR', title: 'Incident Response Testing', description: 'Test the organizational incident response capability.' },

    // MA - Maintenance (6 controls)
    { id: 'MA.L2-3.7.1', family: 'MA', title: 'Perform Maintenance', description: 'Perform maintenance on organizational systems.' },
    { id: 'MA.L2-3.7.2', family: 'MA', title: 'System Maintenance Control', description: 'Provide controls on the tools, techniques, mechanisms, and personnel used to conduct system maintenance.' },
    { id: 'MA.L2-3.7.3', family: 'MA', title: 'Equipment Sanitization', description: 'Ensure equipment removed for off-site maintenance is sanitized of any CUI.' },
    { id: 'MA.L2-3.7.4', family: 'MA', title: 'Media Inspection', description: 'Check media containing diagnostic and test programs for malicious code before the media are used in organizational systems.' },
    { id: 'MA.L2-3.7.5', family: 'MA', title: 'Nonlocal Maintenance', description: 'Require multifactor authentication to establish nonlocal maintenance sessions via external network connections and terminate such connections when nonlocal maintenance is complete.' },
    { id: 'MA.L2-3.7.6', family: 'MA', title: 'Maintenance Personnel', description: 'Supervise the maintenance activities of maintenance personnel without required access authorization.' },

    // MP - Media Protection (9 controls)
    { id: 'MP.L2-3.8.1', family: 'MP', title: 'Media Protection', description: 'Protect (i.e., physically control and securely store) system media containing CUI, both paper and digital.' },
    { id: 'MP.L2-3.8.2', family: 'MP', title: 'Media Access', description: 'Limit access to CUI on system media to authorized users.' },
    { id: 'MP.L2-3.8.3', family: 'MP', title: 'Media Disposal [CUI Data]', description: 'Sanitize or destroy system media containing CUI before disposal or release for reuse.' },
    { id: 'MP.L2-3.8.4', family: 'MP', title: 'Media Markings', description: 'Mark media with necessary CUI markings and distribution limitations.' },
    { id: 'MP.L2-3.8.5', family: 'MP', title: 'Media Accountability', description: 'Control access to media containing CUI and maintain accountability for media during transport outside of controlled areas.' },
    { id: 'MP.L2-3.8.6', family: 'MP', title: 'Portable Storage Encryption', description: 'Implement cryptographic mechanisms to protect the confidentiality of CUI stored on digital media during transport unless otherwise protected by alternative physical safeguards.' },
    { id: 'MP.L2-3.8.7', family: 'MP', title: 'Removeable Media', description: 'Control the use of removable media on system components.' },
    { id: 'MP.L2-3.8.8', family: 'MP', title: 'Shared Media', description: 'Prohibit the use of portable storage devices when such devices have no identifiable owner.' },
    { id: 'MP.L2-3.8.9', family: 'MP', title: 'Protect Backups', description: 'Protect the confidentiality of backup CUI at storage locations.' },

    // PS - Personnel Security (2 controls)
    { id: 'PS.L2-3.9.1', family: 'PS', title: 'Screen Individuals', description: 'Screen individuals prior to authorizing access to organizational systems containing CUI.' },
    { id: 'PS.L2-3.9.2', family: 'PS', title: 'Personnel Actions', description: 'Ensure that organizational systems containing CUI are protected during and after personnel actions such as terminations and transfers.' },

    // PE - Physical Protection (6 controls)
    { id: 'PE.L2-3.10.1', family: 'PE', title: 'Limit Physical Access [CUI Data]', description: 'Limit physical access to organizational systems, equipment, and the respective operating environments to authorized individuals.' },
    { id: 'PE.L2-3.10.2', family: 'PE', title: 'Monitor Facility', description: 'Protect and monitor the physical facility and support infrastructure for organizational systems.' },
    { id: 'PE.L2-3.10.3', family: 'PE', title: 'Escort Visitors [CUI Data]', description: 'Escort visitors and monitor visitor activity.' },
    { id: 'PE.L2-3.10.4', family: 'PE', title: 'Physical Access Logs [CUI Data]', description: 'Maintain audit logs of physical access.' },
    { id: 'PE.L2-3.10.5', family: 'PE', title: 'Manage Physical Access [CUI Data]', description: 'Control and manage physical access devices.' },
    { id: 'PE.L2-3.10.6', family: 'PE', title: 'Alternative Work Sites', description: 'Enforce safeguarding measures for CUI at alternate work sites.' },

    // RA - Risk Assessment (3 controls)
    { id: 'RA.L2-3.11.1', family: 'RA', title: 'Risk Assessments', description: 'Periodically assess the risk to organizational operations (including mission, functions, image, or reputation), organizational assets, and individuals, resulting from the operation of organizational systems and the associated processing, storage, or transmission of CUI.' },
    { id: 'RA.L2-3.11.2', family: 'RA', title: 'Vulnerability Scan', description: 'Scan for vulnerabilities in organizational systems and applications periodically and when new vulnerabilities affecting those systems and applications are identified.' },
    { id: 'RA.L2-3.11.3', family: 'RA', title: 'Vulnerability Remediation', description: 'Remediate vulnerabilities in accordance with risk assessments.' },

    // CA - Security Assessment (4 controls)
    { id: 'CA.L2-3.12.1', family: 'CA', title: 'Security Control Assessment', description: 'Periodically assess the security controls in organizational systems to determine if the controls are effective in their application.' },
    { id: 'CA.L2-3.12.2', family: 'CA', title: 'Operational Plan of Action', description: 'Develop and implement plans of action designed to correct deficiencies and reduce or eliminate vulnerabilities in organizational systems.' },
    { id: 'CA.L2-3.12.3', family: 'CA', title: 'Security Control Monitoring', description: 'Monitor security controls on an ongoing basis to ensure the continued effectiveness of the controls.' },
    { id: 'CA.L2-3.12.4', family: 'CA', title: 'System Security Plan', description: 'Develop, document, and periodically update system security plans that describe system boundaries, system environments of operation, how security requirements are implemented, and the relationships with or connections to other systems.' },

    // SC - System and Communications Protection (16 controls)
    { id: 'SC.L2-3.13.1', family: 'SC', title: 'Boundary Protection [CUI Data]', description: 'Monitor, control, and protect communications (i.e., information transmitted or received by organizational systems) at the external boundaries and key internal boundaries of organizational systems.' },
    { id: 'SC.L2-3.13.2', family: 'SC', title: 'Security Engineering', description: 'Employ architectural designs, software development techniques, and systems engineering principles that promote effective information security within organizational systems.' },
    { id: 'SC.L2-3.13.3', family: 'SC', title: 'Role Separation', description: 'Separate user functionality from system management functionality.' },
    { id: 'SC.L2-3.13.4', family: 'SC', title: 'Shared Resource Control', description: 'Prevent unauthorized and unintended information transfer via shared system resources.' },
    { id: 'SC.L2-3.13.5', family: 'SC', title: 'Public-Access System Separation [CUI Data]', description: 'Implement subnetworks for publicly accessible system components that are physically or logically separated from internal networks.' },
    { id: 'SC.L2-3.13.6', family: 'SC', title: 'Network Communication by Exception', description: 'Deny network communications traffic by default and allow network communications traffic by exception (i.e., deny all, permit by exception).' },
    { id: 'SC.L2-3.13.7', family: 'SC', title: 'Split Tunneling', description: 'Prevent remote devices from simultaneously establishing non-remote connections with organizational systems and communicating via some other connection to resources in external networks (i.e., split tunneling).' },
    { id: 'SC.L2-3.13.8', family: 'SC', title: 'Data in Transit', description: 'Implement cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission unless otherwise protected by alternative physical safeguards.' },
    { id: 'SC.L2-3.13.9', family: 'SC', title: 'Connections Termination', description: 'Terminate network connections associated with communications sessions at the end of the sessions or after a defined period of inactivity.' },
    { id: 'SC.L2-3.13.10', family: 'SC', title: 'Key Management', description: 'Establish and manage cryptographic keys for cryptography employed in organizational systems.' },
    { id: 'SC.L2-3.13.11', family: 'SC', title: 'CUI Encryption', description: 'Employ FIPS-validated cryptography when used to protect the confidentiality of CUI.' },
    { id: 'SC.L2-3.13.12', family: 'SC', title: 'Collaborative Device Control', description: 'Prohibit remote activation of collaborative computing devices and provide indication of devices in use to users present at the device.' },
    { id: 'SC.L2-3.13.13', family: 'SC', title: 'Mobile Code', description: 'Control and monitor the use of mobile code.' },
    { id: 'SC.L2-3.13.14', family: 'SC', title: 'Voice over Internet Protocol', description: 'Control and monitor the use of Voice over Internet Protocol (VoIP) technologies.' },
    { id: 'SC.L2-3.13.15', family: 'SC', title: 'Communications Authenticity', description: 'Protect the authenticity of communications sessions.' },
    { id: 'SC.L2-3.13.16', family: 'SC', title: 'Data at Rest', description: 'Protect the confidentiality of CUI at rest.' },

    // SI - System and Information Integrity (7 controls)
    { id: 'SI.L2-3.14.1', family: 'SI', title: 'Flaw Remediation [CUI Data]', description: 'Identify, report, and correct system flaws in a timely manner.' },
    { id: 'SI.L2-3.14.2', family: 'SI', title: 'Malicious Code Protection [CUI Data]', description: 'Provide protection from malicious code at designated locations within organizational systems.' },
    { id: 'SI.L2-3.14.3', family: 'SI', title: 'Security Alerts & Advisories', description: 'Monitor system security alerts and advisories and take action in response.' },
    { id: 'SI.L2-3.14.4', family: 'SI', title: 'Update Malicious Code Protection [CUI Data]', description: 'Update malicious code protection mechanisms when new releases are available.' },
    { id: 'SI.L2-3.14.5', family: 'SI', title: 'System & File Scanning [CUI Data]', description: 'Perform periodic scans of organizational systems and real-time scans of files from external sources as files are downloaded, opened, or executed.' },
    { id: 'SI.L2-3.14.6', family: 'SI', title: 'Monitor Communications for Attacks', description: 'Monitor organizational systems, including inbound and outbound communications traffic, to detect attacks and indicators of potential attacks.' },
    { id: 'SI.L2-3.14.7', family: 'SI', title: 'Identify Unauthorized Use', description: 'Identify unauthorized use of organizational systems.' }
];

const familyInfo = {
    'AC': { name: 'Access Control', icon: '🔐' },
    'AT': { name: 'Awareness and Training', icon: '🧠' },
    'AU': { name: 'Audit & Accountability', icon: '📋' },
    'CA': { name: 'Security Assessment', icon: '🔍' },
    'CM': { name: 'Configuration Management', icon: '⚙️' },
    'IA': { name: 'Identification & Authentication', icon: '👤' },
    'IR': { name: 'Incident Response', icon: '🚨' },
    'MA': { name: 'Maintenance', icon: '🔧' },
    'MP': { name: 'Media Protection', icon: '💾' },
    'PE': { name: 'Physical Protection', icon: '🏢' },
    'PS': { name: 'Personnel Security', icon: '👥' },
    'RA': { name: 'Risk Assessment', icon: '📈' },
    'SC': { name: 'System & Communications Protection', icon: '🔒' },
    'SI': { name: 'System & Information Integrity', icon: '🛡️' }
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