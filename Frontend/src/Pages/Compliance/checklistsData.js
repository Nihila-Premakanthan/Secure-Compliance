const categoryChecklists = [
  {
    category: "Banks and Financial Services",
    policyDomain: "Information and Cyber Security Governance",
    checklists: [
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Has the bank appointed an Information Security Officer (ISO) responsible for overseeing information and cyber security?",
        policy: "1.1",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are information and cyber security responsibilities clearly defined and assigned to the ISO within the bank?",
        policy: "1.2",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "In the absence of an ISO, has the bank assigned information and cyber security responsibilities to the Chief Information Officer (CIO) or another designated IT officer?",
        policy: "1.3",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are information security audit responsibilities assigned to the Chief Information Auditor (IA) within the bank to ensure regular and thorough assessments?",
        policy: "1.4",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Does the bank have a committee established to make decisions on information and cyber security matters?",
        policy: "1.5",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Does the bank have a separate committee dedicated to information and cyber security risks?",
        policy: "1.6",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Has the bank clearly communicated end-user responsibilities regarding information and cyber security?",
        policy: "1.7",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Has the bank developed training and awareness programs to enhance the information security capacity of accountable individuals?",
        policy: "1.8",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Does the bank conduct background checks and security clearances for officials dealing with 'Secret' or 'Confidential' information assets or having access to Critical National Information Infrastructure (CNII)?",
        policy: "1.9",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is information security considered in the design and implementation of the bank’s functions, policies, strategies, or projects?",
        policy: "1.10",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Does the bank allocate financial provisions to support information security activities and initiatives?",
        policy: "1.11",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Has the bank developed and implemented action plans to achieve its information security objectives in a systematic and measurable manner?",
        policy: "1.12",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Does the bank systematically identify information assets that hold significant value to the organization?",
        policy: "2.1",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Does the bank conduct risk assessments to evaluate and quantify the risks associated with identified information assets?",
        policy: "2.2",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Does the bank periodically reassess the value of information assets to ensure alignment with organizational priorities and changes?",
        policy: "2.3",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Does the bank regularly reassess and update risk assessments associated with information assets to address evolving threats and vulnerabilities?",
        policy: "2.4",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Does the bank classify its information assets based on sensitivity or other relevant criteria to establish appropriate protective measures?",
        policy: "2.5",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Does the bank maintain an IT Assets Register to record and track all IT assets utilized within the organization?",
        policy: "2.6",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Does the bank classify its IT assets based on their criticality to the organization's operations and overall security posture?",
        policy: "2.7",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Does the bank clearly identify and designate owners for each information and IT asset to ensure accountability and responsibility?",
        policy: "2.8",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank implement encryption measures for sensitive information before storing it to ensure data integrity and confidentiality?",
        policy: "3.1",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is sensitive information encrypted before being transmitted through electronic channels to prevent unauthorized access during transit?",
        policy: "3.2",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank ensure that sensitive information is only processed or stored in designated secure areas with appropriate physical and environmental controls?",
        policy: "3.3",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank have measures to protect secure areas from environmental risks such as fire, flood, humidity, and temperature?",
        policy: "3.4",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank have protocols and controls to prevent unauthorized access to secure areas?",
        policy: "3.5",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank implement measures to continuously prevent unauthorized entry into secure areas?",
        policy: "3.6",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Has the bank implemented an Identity Management and Access Control Policy to regulate access to information systems and assets?",
        policy: "3.7",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank ensure strong authentication to protect against unauthorized access?",
        policy: "3.8",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank comply with data sovereignty regulations and policies during the processing and storage of information?",
        policy: "3.9",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank conduct risk assessments before obtaining cloud services to mitigate potential security risks?",
        policy: "3.10",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are all operating systems used by the bank equipped with valid licenses?",
        policy: "3.11",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank regularly update its operating systems with the latest patches and fixes provided by vendors?",
        policy: "3.12",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank install antimalware software with valid licenses on all machines to protect against malicious software?",
        policy: "3.13",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank restrict users from using personal emails for official communications to prevent security risks?",
        policy: "3.14",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank implement email filtering to detect and remove emails known to contain malware?",
        policy: "3.15",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is encryption utilized when sensitive information is transmitted via email to maintain confidentiality?",
        policy: "3.16",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Has the bank deployed firewalls within its computer network to control and monitor incoming and outgoing network traffic?",
        policy: "3.17",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank ensure the secure usage of Virtual Private Networks (VPNs) for remote access?",
        policy: "3.18",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is it mandatory for all users connecting remotely to use a VPN to maintain a secure connection?",
        policy: "3.19",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank have procedures for regularly backing up data to prevent data loss?",
        policy: "3.20",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are backups stored in secure locations such as fireproof, secure areas, or physically distant from the data processing site?",
        policy: "3.21",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank follow secure methods for disposing of electronic media containing sensitive information?",
        policy: "3.22",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Has the bank implemented an internal information security audit program to regularly assess and enhance security measures?",
        policy: "3.23",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank conduct Vulnerability Assessments and Penetration Testing (VAPTs) through Sri Lanka CERT prior to any software application deployment?",
        policy: "3.24",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank conduct regular Vulnerability Assessments and Penetration Testing for its computer network?",
        policy: "3.25",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank adhere to work-from-home guidelines issued by Sri Lanka CERT to ensure a secure remote working environment?",
        policy: "3.26",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank have a formal procedure for registering personal devices used within the organization?",
        policy: "3.27",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the bank prohibit personal devices from processing or storing critical data to prevent security risks?",
        policy: "3.28",
      },
      {
        policyDomain: "Detection of Information Security Incidents",
        assessmentCriteria:
          "Does the bank instruct all staff to promptly report any suspicious activity, contact, theft, virus, vulnerability, unauthorized access, tampering with files, or violation of security policy to the designated person in charge of Information Security?",
        policy: "4.1",
      },
      {
        policyDomain: "Detection of Information Security Incidents",
        assessmentCriteria:
          "Is the bank required to report cybersecurity incidents promptly to Sri Lanka CERT or any other relevant party as per established reporting procedures?",
        policy: "4.2",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "Has the bank developed and maintained an Incident Response Plan outlining procedures to be followed in the event of information and cyber security incidents?",
        policy: "5.1",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "Does the bank activate the Incident Response Plan promptly to minimize the impact of cyber security incidents?",
        policy: "5.2",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "Has the bank developed a comprehensive Disaster Recovery Plan to facilitate the recovery process in the event of a disaster or disruptive event?",
        policy: "5.3",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "Does the bank promptly activate its Disaster Recovery Plan to restore disrupted services and ensure continuity of critical operations?",
        policy: "5.4",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Is strong encryption mandated for all data transmitted through the payment gateway, including data at rest and in transit?",
        policy: "6.1",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Does the payment gateway adhere to applicable legal and regulatory standards, such as PCI DSS?",
        policy: "6.2",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Are strict access controls and authentication measures defined for accessing payment gateway systems, including multi-factor authentication and role-based access controls?",
        policy: "6.3",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Are all transactions processed through the payment gateway continuously monitored and logged for suspicious activities and anomalies?",
        policy: "6.4",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Is advanced fraud detection and prevention technology implemented to identify and prevent fraudulent transactions?",
        policy: "6.5",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Is data integrity maintained throughout the transaction process, including mechanisms for transaction validation, data hashing, and checksums?",
        policy: "6.6",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Is there a policy governing the relationship with third-party service providers and vendors that interact with the payment gateway, including due diligence and ongoing monitoring of vendor compliance?",
        policy: "6.7",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Are protocols established for responding to security incidents within the payment gateway ecosystem, including immediate containment actions and notification procedures?",
        policy: "6.8",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Are plans developed and maintained for business continuity and disaster recovery in the event of a major disruption to payment gateway operations?",
        policy: "6.9",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Are regular training and security awareness programs provided for all employees involved with the payment gateway to keep them informed about the latest security threats and best practices?",
        policy: "6.10",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Has the bank established a formal IT governance framework to assess roles, responsibilities, and decision-making processes for IT security stakeholders?",
        policy: "7.1",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is there a senior management representative responsible for overseeing information security implementation and maintenance within the bank?",
        policy: "7.2",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are regular risk assessments conducted to identify and prioritize IT security risks within the bank, guiding the development of security controls?",
        policy: "7.3",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Does the bank have a continuous improvement process for information security, ensuring periodic assessments align with changes in the organization's IT environment and risk profile?",
        policy: "7.4",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are roles and responsibilities for IT security personnel clearly defined within the bank, covering the development, implementation, and maintenance of security controls?",
        policy: "7.5",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Does the bank provide necessary training and resources for IT security personnel, including information security training and access to required tools and technologies?",
        policy: "7.6",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are IT security personnel within the bank aware of the organization's IT security policies and procedures?",
        policy: "7.7",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Has the bank established a process for reporting and investigating IT security incidents?",
        policy: "7.8",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is there a continuous monitoring program within the bank to assess ongoing compliance with IT security policies, standards, and regulatory requirements?",
        policy: "7.9",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Has the bank established and enforced strong password policies?",
        policy: "8.1",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Do the password policies of the bank include requirements such as length, complexity, and expiration?",
        policy: "8.2",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is multi-factor authentication (MFA) implemented for required sensitive systems and data within the bank?",
        policy: "8.3",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Does the bank require password changes at appropriate intervals?",
        policy: "8.4",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Do password complexity requirements within the bank align with industry best practices?",
        policy: "8.5",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Does the bank provide user awareness programs on password security?",
        policy: "8.6",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Do password management practices within the bank align with relevant regulatory requirements?",
        policy: "8.7",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are stored passwords encrypted or masked in the bank's databases?",
        policy: "8.8",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Does the bank implement adaptive authentication mechanisms based on risk assessments and user behavior?",
        policy: "8.9",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is there a secure process for users to recover or reset their passwords within the bank?",
        policy: "8.10",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Does the bank employ monitoring and anomaly detection tools to identify suspicious or abnormal password-related activities?",
        policy: "8.11",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are periodic security awareness training sessions specifically focused on password security held within the bank?",
        policy: "8.12",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is there a defined process for handling exceptions to the standard password policies within the bank, and is it consistently applied?",
        policy: "8.13",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is there integration between the password management system and the broader Identity and Access Management (IAM) framework within the bank?",
        policy: "8.14",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Does the bank have a documented policy for comprehensive backup management, including regular backup restoration testing?",
        policy: "9.1",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are backups stored in a remote location, with logs maintained when backups are sent?",
        policy: "9.2",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Does the bank review automated backups weekly or as needed for sensitive data?",
        policy: "9.3",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Does the bank encrypt recovery data or use data separation for protection?",
        policy: "9.4",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is there a maintained isolated instance of recovery data using version control within the bank?",
        policy: "9.5",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Does the bank have a documented backup retention policy specifying the duration backups are retained?",
        policy: "9.6",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Does the bank leverage cloud-based backup solutions, and are these solutions compliant with security and privacy standards?",
        policy: "9.7",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is there integration between the backup and incident response plans to ensure timely restoration in the event of a security incident or data loss?",
        policy: "9.8",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are there monitoring tools to track the status of backup processes and alerts to notify personnel in case of backup failures or anomalies?",
        policy: "9.9",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are backups configured in an immutable state to prevent unauthorized modifications or deletions?",
        policy: "9.10",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is there a versioning system in place for backups to facilitate the retrieval of specific data versions?",
        policy: "9.11",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Does the bank conduct continuous testing of backup and recovery processes to ensure resilience against evolving threats and changes in the IT environment?",
        policy: "9.12",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Does the bank conduct regular Vulnerability Assessments and Penetration Tests (VAPT)?",
        policy: "10.1",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Are records of vulnerabilities and VAPT maintained within the bank?",
        policy: "10.2",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria: "Does the bank perform VAPT periodically?",
        policy: "10.3",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Has the bank taken necessary actions to address VAPT findings?",
        policy: "10.4",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Does the bank have an effective vulnerability assessment process for identifying and prioritizing potential security risks?",
        policy: "10.5",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Does the bank have a patch management process in place to address vulnerabilities promptly after identification?",
        policy: "10.6",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is vulnerability management integrated with configuration management processes to ensure consistency in identifying vulnerabilities across the environment?",
        policy: "10.7",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Does the bank collaborate with external sources to stay informed about emerging vulnerabilities?",
        policy: "10.8",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Are metrics and reporting mechanisms effective for tracking the success of vulnerability management efforts?",
        policy: "10.9",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Does the bank have a documented timeline for remediating identified vulnerabilities, and is it consistently adhered to?",
        policy: "10.10",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Does the vulnerability management process consider asset criticality when prioritizing remediation efforts?",
        policy: "10.11",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Does the bank employ continuous monitoring mechanisms to identify and assess new vulnerabilities in a timely manner?",
        policy: "10.12",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Does the bank have a formalized procedure for identifying, documenting, and approving all changes?",
        policy: "11.1",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are changes subjected to meticulous planning and testing before implementation?",
        policy: "11.2",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is there a specific approach for evaluating the impact of changes?",
        policy: "11.3",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are thorough risk assessments conducted as a result of organizational changes?",
        policy: "11.4",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Has the bank implemented measures to effectively mitigate identified risks?",
        policy: "11.5",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are security controls reviewed and tested after changes are made?",
        policy: "11.6",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Were post-implementation testing and security audits performed to validate effectiveness?",
        policy: "11.7",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is there effective communication of change details to all relevant parties?",
        policy: "11.8",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is there a well-defined plan for rolling back changes in the event of unexpected issues, and is it periodically tested for effectiveness?",
        policy: "11.9",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Does the bank leverage automated tools for change management to streamline the change request, approval, and tracking processes?",
        policy: "11.10",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are there established metrics to measure the performance and effectiveness of the change management process?",
        policy: "11.11",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is the documentation related to changes easily accessible to authorized personnel, and is there a secure repository for change records?",
        policy: "11.12",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Has the organization implemented a secure development environment?",
        policy: "12.1",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Is the secure development process being maintained?",
        policy: "12.2",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria: "Are development environments segregated?",
        policy: "12.3",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are access controls implemented to prevent unauthorized access to critical development environments?",
        policy: "12.4",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are secure coding standards used, and are regular code reviews conducted to identify and rectify potential vulnerabilities?",
        policy: "12.5",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria: "Is application penetration testing conducted?",
        policy: "12.6",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are developers given training in application security concepts and secure coding practices?",
        policy: "12.7",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Is there a separation between production and non-production systems?",
        policy: "12.8",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are standard hardening configuration templates used for application infrastructure?",
        policy: "12.9",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are up-to-date and trusted third-party software components used?",
        policy: "12.10",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Do policies address a secure environment, including security in the development lifecycle, security checkpoints to milestones, and a secure repository?",
        policy: "12.11",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are DevSecOps principles integrated into the software development lifecycle to ensure continuous security throughout the development process?",
        policy: "12.12",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are there specific guidelines and controls in place for secure API development, including authentication, authorization, and data protection?",
        policy: "12.13",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Is there integration between software development processes and incident response plans to facilitate a rapid response in case of security incidents?",
        policy: "12.14",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Is threat modeling employed during the design phase to identify and mitigate potential security threats and vulnerabilities?",
        policy: "12.15",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Do developers receive ongoing and up-to-date security training to stay abreast of the latest threats and best practices?",
        policy: "12.16",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Does the bank maintain an up-to-date inventory of all hardware and software assets?",
        policy: "13.1",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is the inventory of hardware and software assets accurate and complete, including critical details such as version numbers and dependencies?",
        policy: "13.2",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Has the bank established effective processes for prioritizing patches based on the criticality of vulnerabilities and potential business impact?",
        policy: "13.3",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Does the bank maintain a testing environment that mirrors the production environment for validating patches?",
        policy: "13.4",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Does the bank have a streamlined process for applying critical patches in emergency situations?",
        policy: "13.5",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Has the bank implemented automated tools for deploying patches?",
        policy: "13.6",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Does the bank maintain detailed records of applied patches, including dates, versions, and any encountered issues?",
        policy: "13.7",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is there integration between the patch management process and the bank's change management system to ensure coordination and communication between teams?",
        policy: "13.8",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Does the bank have effective communication with vendors to stay informed about upcoming patches, known vulnerabilities, and recommended mitigation strategies?",
        policy: "13.9",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Does the bank have a documented plan for rolling back patches in the event of unexpected issues, and is it periodically tested to ensure its effectiveness?",
        policy: "13.10",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Are reporting and metrics related to patch management available and effective, including compliance with patching timelines and resolution of vulnerabilities?",
        policy: "13.11",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is the patch management process integrated with endpoint security solutions to ensure comprehensive coverage and visibility into the patch status of endpoints?",
        policy: "13.12",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are access control mechanisms with logging used on doors within the bank?",
        policy: "14.1",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are entry restrictions enforced for sensitive zones within the bank, including the deployment of security cameras for added surveillance?",
        policy: "14.2",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Is the bank's equipment evaluated against fire, flood, and earthquake hazards, with regular maintenance and testing of controls?",
        policy: "14.3",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are access restrictions in place for the bank's data centers, including the use of cameras and effective blocking of unauthorized devices by users?",
        policy: "14.4",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Does the bank limit access to sensitive areas, employ guards, and monitor with CCTV? Are incoming items registered and inspected?",
        policy: "14.5",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are there adequate security controls in place for the bank's server rooms, including access restrictions and monitoring?",
        policy: "14.6",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Does the bank employ biometric access controls for sensitive areas to provide an additional layer of identity verification?",
        policy: "14.7",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are physical intrusion detection systems, such as motion sensors or alarms, implemented to detect unauthorized access attempts?",
        policy: "14.8",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are environmental controls, like fire suppression systems and temperature controls, regularly tested for effectiveness and reliability?",
        policy: "14.9",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Does the bank have procedures for the secure disposal of sensitive materials and equipment, ensuring compliance with data protection and environmental regulations?",
        policy: "14.10",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Does the bank have an emergency response plan for physical security incidents, outlining clear procedures for handling emergencies such as natural disasters or security breaches?",
        policy: "14.11",
      },
      {
        policyDomain: "Critical Infrastructure Protection",
        assessmentCriteria:
          "Does the bank tailor risk assessments to specific types of critical infrastructure?",
        policy: "15.1",
      },
      {
        policyDomain: "Critical Infrastructure Protection",
        assessmentCriteria:
          "Are there specified standards and technologies in place for physically fortifying critical infrastructure facilities?",
        policy: "15.2",
      },
      {
        policyDomain: "Critical Infrastructure Protection ",
        assessmentCriteria:
          "Does the bank focus on the cybersecurity of systems essential to infrastructure operations, including industrial control systems and operational technology?",
        policy: "15.3",
      },
      {
        policyDomain: "Critical Infrastructure Protection ",
        assessmentCriteria:
          "Are ultra-strict access controls implemented for physical and digital access to highly sensitive areas of critical infrastructure?",
        policy: "15.4",
      },
      {
        policyDomain: "Critical Infrastructure Protection ",
        assessmentCriteria:
          "Has the bank developed comprehensive emergency response plans for various crises that could impact critical infrastructure?",
        policy: "15.5",
      },
      {
        policyDomain: "Critical Infrastructure Protection ",
        assessmentCriteria:
          "Does the bank ensure the security and reliability of the supply chain supporting critical infrastructure?",
        policy: "15.6",
      },
      {
        policyDomain: "Critical Infrastructure Protection ",
        assessmentCriteria:
          "Are redundant systems and failover mechanisms implemented to ensure continuous operation during incidents?",
        policy: "15.7",
      },
      {
        policyDomain: "Critical Infrastructure Protection ",
        assessmentCriteria:
          "Does the bank provide specialized security training and regular simulation exercises tailored to the protection of critical infrastructure?",
        policy: "15.8",
      },
      {
        policyDomain: "Critical Infrastructure Protection ",
        assessmentCriteria:
          "Is the bank compliant with all governmental regulations specific to the sector and does it coordinate security practices across similar infrastructure entities?",
        policy: "15.9",
      },
      {
        policyDomain: "Critical Infrastructure Protection ",
        assessmentCriteria:
          "Does the bank facilitate strategic partnerships and information sharing with governmental bodies, other critical infrastructure entities, and international counterparts to enhance collective security and response capabilities?",
        policy: "15.10",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Does the bank have a documented policy for comprehensive event logging, with clear definitions of event types?",
        policy: "16.1",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Does the bank maintain a comprehensive inventory covering all systems, applications, and network components generating log events?",
        policy: "16.2",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Are administrator and operator activities systematically logged, with regular reviews to detect unauthorized or suspicious actions?",
        policy: "16.3",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Does the bank implement a retention policy for event logs with a sufficient retention period?",
        policy: "16.4",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Does the bank implement real-time log generation, continuous monitoring, and automatic alert mechanisms during critical events?",
        policy: "16.5",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Are logs regularly backed up and protected from unauthorized access, with encryption standards in place?",
        policy: "16.6",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Does the bank adhere to a policy for clock synchronization across critical systems and applications?",
        policy: "16.7",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Does the bank have procedures for verifying the integrity of logs to ensure they haven't been tampered with or altered in an unauthorized manner?",
        policy: "16.8",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Does the bank log user activities, especially interactions with sensitive data and critical systems?",
        policy: "16.9",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Does the bank regularly review and update its log retention policy to align with changing regulatory requirements and organizational needs?",
        policy: "16.10",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Does the bank integrate logs with a Security Information and Event Management (SIEM) system for centralized log analysis and correlation?",
        policy: "16.11",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Do personnel responsible for log analysis receive regular training to enhance their skills in identifying patterns, anomalies, and potential security incidents from log data?",
        policy: "16.12",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Has the bank implemented network controls, such as VLANs, to safeguard its information systems?",
        policy: "17.1",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Does the bank restrict connections to its network as a security measure?",
        policy: "17.2",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Does the bank have measures in place to protect its public-facing networks, ensuring robust security?",
        policy: "17.3",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Does the bank define and monitor network-related service levels?",
        policy: "17.4",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Does the bank actively practice defining and monitoring network-related service levels?",
        policy: "17.5",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Has the bank implemented Network Access Control (NAC) mechanisms to manage and restrict access based on device health and user identity?",
        policy: "17.6",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Does the bank have Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) in place to detect and respond to network threats?",
        policy: "17.7",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Has the bank implemented network segmentation to isolate critical assets and limit lateral movement in the event of a security breach?",
        policy: "17.8",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Does the bank continuously monitor its network to promptly identify and respond to anomalous activities?",
        policy: "17.9",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Does the bank monitor and project capacity for all hardware resources, utilities, software, and personnel?",
        policy: "18.1",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Are capacity requirements identified for all systems, considering their business criticality?",
        policy: "18.2",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Does the bank consistently perform continuous monitoring and tuning of resources to maintain the required system performance?",
        policy: "18.3",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Are there detective controls in place to indicate problems in a timely manner?",
        policy: "18.4",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Does the bank assess scalability to ensure systems can handle increased loads and demands?",
        policy: "18.5",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Has the bank conducted a business impact analysis related to capacity management, identifying potential impacts on critical business processes?",
        policy: "18.6",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Does the bank have strategies in place for optimizing resource usage, including dynamic resource allocation and deallocation based on demand?",
        policy: "18.7",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Does the bank have comprehensive capacity planning documentation covering hardware, software, and personnel, and is it regularly updated?",
        policy: "18.8",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Does the bank have comprehensive incident response procedures covering planning, preparation, and logging activities?",
        policy: "19.1",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Are the procedures for monitoring, detecting, analyzing, and reporting information security events and incidents effective?",
        policy: "19.2",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Are individuals responsible for handling incidents competent, possessing the necessary skills and training?",
        policy: "19.3",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Is Root Cause Analysis (RCA) conducted for incidents to determine corrective and preventive actions, with lessons learned communicated to relevant parties?",
        policy: "19.4",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Does the bank have guidelines for incident classification and prioritization, ensuring a systematic approach to incident response?",
        policy: "19.5",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Does the bank have continuous improvement mechanisms within incident response procedures, with regular reviews and updates based on lessons learned and emerging threats?",
        policy: "19.6",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Does the bank ensure cross-functional collaboration during incident response, ensuring effective communication and coordination among relevant teams?",
        policy: "19.7",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Does the bank utilize automated incident response tools to enhance the efficiency and speed of incident detection, containment, and remediation?",
        policy: "19.8",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Does the Business Continuity Plan (BCP) adequately address the continuity of information security, including data protection and incident response?",
        policy: "20.1",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Do incident response personnel possess the responsibility, authority, and competence to effectively manage incidents during business disruptions?",
        policy: "20.2",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Have documented plans and recovery procedures been reviewed and approved, ensuring their availability and alignment with information security requirements?",
        policy: "20.3",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Are information security controls effectively tested during simulated disaster recovery scenarios?",
        policy: "20.4",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Are regular training programs provided for incident response personnel to prepare for security incidents during disruptions?",
        policy: "20.5",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Does the organization consider cyber insurance (First-party/Third-party) as part of its risk management strategy, and is the coverage adequate and aligned with information security objectives?",
        policy: "20.6",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Does the bank conduct collaborative exercises with relevant stakeholders to validate and improve the coordination and communication aspects of the Business Continuity and Disaster Recovery plans?",
        policy: "20.7",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Are continuous improvement mechanisms implemented within the Business Continuity and Disaster Recovery plans, with regular reviews and updates based on lessons learned and emerging threats?",
        policy: "20.8",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Has the organization assessed and documented external dependencies, including third-party services, and incorporated them into the Business Continuity and Disaster Recovery plans?",
        policy: "20.9",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Is strong encryption mandated for all data transmitted through the payment gateway, including data at rest and in transit?",
        policy: "21.1",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Does the payment gateway adhere to applicable legal and regulatory standards, such as PCI DSS?",
        policy: "21.2",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Are strict access controls and authentication measures defined for accessing payment gateway systems, including multi-factor authentication and role-based access controls?",
        policy: "21.3",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Are all transactions processed through the payment gateway continuously monitored and logged for suspicious activities and anomalies?",
        policy: "21.4",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Is advanced fraud detection and prevention technology implemented to identify and prevent fraudulent transactions?",
        policy: "21.5",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Is data integrity maintained throughout the transaction process, including mechanisms for transaction validation, data hashing, and checksums?",
        policy: "21.6",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Is there a policy governing the relationship with third-party service providers and vendors that interact with the payment gateway, including due diligence and ongoing monitoring of vendor compliance?",
        policy: "21.7",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Are protocols established for responding to security incidents within the payment gateway ecosystem, including immediate containment actions and notification procedures?",
        policy: "21.8",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Are plans developed and maintained for business continuity and disaster recovery in the event of a major disruption to payment gateway operations?",
        policy: "21.9",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Are regular training and security awareness programs provided for all employees involved with the payment gateway to keep them informed about the latest security threats and best practices?",
        policy: "21.10",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Does the bank have guidelines in place for the collection, use, and protection of personal information, ensuring compliance with data protection laws?",
        policy: "22.1",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Are security controls implemented to protect data from unauthorized access, use, disclosure, disruption, modification, or destruction?",
        policy: "22.2",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Does the bank outline timeframes for retaining customer data and have procedures for its safe disposal when no longer needed?",
        policy: "22.3",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Are access controls in place to ensure that customer data is accessible only to employees or stakeholders who require it to perform their duties?",
        policy: "22.4",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Are procedures established for responding to data breaches and security incidents, including incident detection, management, recovery, and notification processes?",
        policy: "22.5",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Is customer data encrypted during storage and transmission to protect against unauthorized access?",
        policy: "22.6",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Does the bank manage risks associated with sharing customer data with third-party service providers and business partners?",
        policy: "22.7",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Are all employees provided with training on data protection principles, security practices, and the consequences of data breaches?",
        policy: "22.8",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Does the bank ensure ongoing compliance with internal policies and external regulatory requirements related to data protection through regular audits?",
        policy: "22.9",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Does the bank maintain the accuracy and completeness of customer data throughout its lifecycle and have mechanisms in place to detect and correct inaccuracies?",
        policy: "22.10",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Is regular security awareness training mandated for all employees, including familiarization with the bank’s security practices and potential threats?",
        policy: "23.1",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Do employees receive role-specific training tailored to their positions, particularly for roles handling sensitive information, critical infrastructure, or special equipment?",
        policy: "23.2",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Are employees trained on regulatory and legal compliance relevant to their specific duties, including industry-specific regulations such as HIPAA, PCI DSS, or GDPR?",
        policy: "23.3",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Is specialized training provided on recognizing and responding to phishing attempts and other social engineering attacks, including regular simulation exercises?",
        policy: "23.4",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Are employees trained on the importance of data privacy and protection, including data classification, secure handling procedures, and incident reporting protocols?",
        policy: "23.5",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Do employees receive training on physical security protocols, including securing workspaces, proper badge usage, and reporting suspicious activities?",
        policy: "236",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Are employees instructed on cybersecurity best practices, including strong password usage, regular software updates, and secure browsing habits?",
        policy: "23.7",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Are employees trained on emergency response procedures, including evacuation protocols and the use of emergency equipment?",
        policy: "23.8",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Is there encouragement for ongoing learning and skill development for employees, including opportunities for further education and access to new training materials?",
        policy: "23.9",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Are mechanisms in place to obtain feedback on the effectiveness of training programs and assess knowledge retention, with feedback used to improve future training sessions?",
        policy: "23.10",
      },
      {
        policyDomain: "Secure Interbank Transactions",
        assessmentCriteria:
          "Is all interbank transaction conducted over secure channels with robust encryption protocols, including the use of secure messaging systems like SWIFT?",
        policy: "24.1",
      },
      {
        policyDomain: "Secure Interbank Transactions",
        assessmentCriteria:
          "Are advanced analytics and monitoring systems implemented to detect and prevent fraudulent activities in interbank transactions?",
        policy: "24.2",
      },
      {
        policyDomain: "Secure Interbank Transactions",
        assessmentCriteria:
          "Does the bank ensure adherence to all regulatory requirements related to anti-money laundering and counter-terrorism financing in interbank transactions?",
        policy: "24.3",
      },
      {
        policyDomain: "Secure Interbank Transactions",
        assessmentCriteria:
          "Is there a policy in place to manage and mitigate risks associated with the failure of a counterparty to meet their obligations in interbank transactions?",
        policy: "24.4",
      },
      {
        policyDomain: "Secure Interbank Transactions",
        assessmentCriteria:
          "Does the bank have policies and procedures to ensure the continuity of interbank transaction processes in the event of operational disruptions?",
        policy: "24.5",
      },
      {
        policyDomain: "Secure Interbank Transactions",
        assessmentCriteria:
          "Are measures in place to protect the integrity and confidentiality of transaction data in interbank transactions?",
        policy: "24.6",
      },
      {
        policyDomain: "Secure Interbank Transactions",
        assessmentCriteria:
          "Does the bank ensure that all interbank transactions comply with the terms and conditions set out in interbank agreements?",
        policy: "24.7",
      },
      {
        policyDomain: "Secure Interbank Transactions",
        assessmentCriteria:
          "Is there a policy to manage issues related to handling multiple currencies in interbank transactions?",
        policy: "24.8",
      },
      {
        policyDomain: "Secure Interbank Transactions",
        assessmentCriteria:
          "Are there procedures to ensure accurate and timely reconciliation of interbank transactions?",
        policy: "24.9",
      },
      {
        policyDomain: "Secure Interbank Transactions",
        assessmentCriteria:
          "Does the bank provide training and raise awareness among employees about procedures and controls related to interbank transactions?",
        policy: "24.10",
      },
      {
        policyDomain: "Security Operations Center",
        assessmentCriteria:
          "Is there a governance framework established for the management and oversight of the SOC?",
        policy: "25.1",
      },
      {
        policyDomain: "Security Operations Center",
        assessmentCriteria:
          "Are hiring, training, and continuous professional development criteria outlined for SOC staff?",
        policy: "25.2",
      },
      {
        policyDomain: "Security Operations Center",
        assessmentCriteria:
          "Are access controls strictly controlled and monitored for SOC systems and information?",
        policy: "25.3",
      },
      {
        policyDomain: "Security Operations Center",
        assessmentCriteria:
          "Is there a defined incident response and management procedure for cybersecurity incidents?",
        policy: "25.4",
      },
      {
        policyDomain: "Security Operations Center",
        assessmentCriteria:
          "Does the bank ensure that all data handled by the SOC complies with legal and regulatory requirements concerning data protection and privacy?",
        policy: "25.5",
      },
      {
        policyDomain: "Security Operations Center",
        assessmentCriteria:
          "Are there protocols established for communication within the SOC and with external stakeholders?",
        policy: "25.6",
      },
      {
        policyDomain: "Security Operations Center",
        assessmentCriteria:
          "Is there a policy in place for the collection, analysis, and dissemination of threat intelligence?",
        policy: "25.7",
      },
      {
        policyDomain: "Security Operations Center",
        assessmentCriteria:
          "Are procedures outlined for continuous monitoring of organizational assets within the SOC?",
        policy: "25.8",
      },
      {
        policyDomain: "Security Operations Center",
        assessmentCriteria:
          "Is there a policy governing the selection, deployment, and maintenance of security tools used within the SOC?",
        policy: "25.9",
      },
      {
        policyDomain: "Security Operations Center",
        assessmentCriteria:
          "Are there regular audits conducted to ensure that the SOC adheres to industry standards and regulatory requirements?",
        policy: "25.10",
      },
      {
        policyDomain: "Security Operations Center",
        assessmentCriteria:
          "Is there a framework established for continuous assessment and improvement of SOC operations?",
        policy: "25.11",
      },
    ],
  },
  {
    category: "Healthcare Services",
    policyDomain: "Information and Cyber Security Governance",
    checklists: [
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is someone designated to oversee information and cyber security within the hospital?",
        policy: "1.1",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Does the Information Security Officer (ISO) have specific responsibilities to ensure the security of the hospital's information and data?",
        policy: "1.2",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "In the absence of an ISO, is there a designated individual responsible for information and cyber security within the hospital?",
        policy: "1.3",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is there a designated person or team tasked with conducting regular and thorough assessments of the hospital's information security?",
        policy: "1.4",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is there a committee established within the hospital responsible for making decisions regarding information and cyber security matters?",
        policy: "1.5",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Does the hospital have a separate committee dedicated to evaluating and deciding on information and cyber security risks?",
        policy: "1.6",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are end-user responsibilities regarding information and cyber security clearly communicated and explained within the hospital?",
        policy: "1.7",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are proactive steps taken to enhance the information security awareness and skills of staff members within the hospital?",
        policy: "1.8",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are background checks and security clearances conducted for individuals who handle sensitive information or have access to critical hospital infrastructure?",
        policy: "1.9",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is information security integrated into the design and implementation of the hospital's functions, policies, and projects?",
        policy: "1.10",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is there a specific allocation of financial resources to support information security activities and initiatives within the hospital?",
        policy: "1.11",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are there structured action plans in place to achieve the hospital's information security objectives?",
        policy: "1.12",
      },
    ],
  },
  {
    category: "Energy and Utility Services",
    policyDomain: "Information and Cyber Security Governance",
    checklists: [
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is there an appointed Information Security Officer (ISO) within the organization overseeing information and cyber security?",
        policy: "1.1",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are the information and cyber security responsibilities of the ISO clearly defined and assigned?",
        policy: "1.2",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "In the absence of an ISO, are information and cyber security responsibilities clearly assigned to either the Chief Information Officer (CIO) or a designated IT officer?",
        policy: "1.3",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is someone responsible for overseeing information security audit responsibilities to ensure regular and thorough assessments?",
        policy: "1.4",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Has a committee been established within the organization to make decisions on information and cyber security matters?",
        policy: "1.5",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is there a separate committee dedicated to making decisions specifically on information and cyber security risks?",
        policy: "1.6",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Have end-user responsibilities regarding information and cyber security been clearly communicated and explained throughout the organization?",
        policy: "1.7",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Have proactive steps been taken to develop the information security capacity of accountable individuals through training and awareness programs?",
        policy: "1.8",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are background checks and security clearances conducted for officials dealing with Secret or Confidential information assets or having access to Critical National Information Infrastructure (CNII)?",
        policy: "1.9",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is information security adequately considered in the design and implementation of the organization’s functions, policies, strategies, or projects?",
        policy: "1.10",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are financial provisions allocated to support information security activities and initiatives within the organization?",
        policy: "1.11",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Have action plans been developed and implemented to achieve the organization's information security objectives, ensuring a systematic and measurable approach?",
        policy: "1.12",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Does the organization systematically identify information assets that hold value?",
        policy: "2.1",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Is there a process in place to conduct risk assessments for evaluating and quantifying the risks associated with identified information assets?",
        policy: "2.2",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are the value assessments of information assets reassessed regularly to ensure alignment with organizational priorities and changes?",
        policy: "2.3",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are risk assessments associated with information assets regularly reassessed and updated to address evolving threats and vulnerabilities?",
        policy: "2.4",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are information assets classified based on specific criteria to establish appropriate protective measures?",
        policy: "2.5",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Is there an IT Assets Register in place to record and track all IT assets within the organization?",
        policy: "2.6",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are IT assets classified based on their criticality to the organization's operations and overall security posture?",
        policy: "2.7",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are owners clearly identified and designated for each information and IT asset to ensure accountability and responsibility?",
        policy: "2.8",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the organization implement encryption measures for sensitive information before storage to ensure data integrity and confidentiality?",
        policy: "3.1",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are encryption methods employed to encrypt sensitive information before transmitting it through electronic channels?",
        policy: "3.2",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are there designated secure areas with appropriate physical and environmental controls where sensitive information is processed or stored?",
        policy: "3.3",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are measures in place to protect secure areas from environmental risks such as fire, flood, humidity, and temperature to maintain information integrity and availability?",
        policy: "3.4",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are protocols and controls established to prevent unauthorized access to secure areas within the organization?",
        policy: "3.5",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the organization ensure the continued practice of processing or storing sensitive information in secure areas to uphold security standards?",
        policy: "3.6",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are appropriate measures adopted to safeguard secure areas from environmental risks like fire, flood, humidity, and temperature?",
        policy: "3.7",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are measures to prevent unauthorized entry to secure areas consistently enforced over time?",
        policy: "3.8",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Has an Identity Management and Access Control Policy been implemented to regulate access to information systems and assets?",
        policy: "3.9",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are methods of strong authentication utilized within the organization to enhance access security and prevent unauthorized access?",
        policy: "3.10",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Does the organization ensure compliance with data sovereignty regulations and policies during the processing and storage of information?",
        policy: "3.11",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are procedures in place to conduct thorough risk assessments before obtaining cloud services to mitigate potential security risks?",
        policy: "3.12",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are measures taken to ensure that all operating systems used within the organization have valid licenses?",
        policy: "3.13",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are organization operating systems regularly updated with the latest patches and fixes provided by the vendor?",
        policy: "3.14",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are procedures established to ensure the timely installation of critical patches supplied by vendors?",
        policy: "3.15",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is antimalware software with valid licenses installed on all machines within the organization to protect against malicious software?",
        policy: "3.16",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are users restricted from using personal emails for official communications to mitigate security risks?",
        policy: "3.17",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Have email filters been set up to detect and remove emails known to have malware attached?",
        policy: "3.18",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is encryption utilized when sending sensitive information via email to maintain confidentiality?",
        policy: "3.19",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Have firewalls been deployed within the organization's computer network to control and monitor incoming and outgoing network traffic?",
        policy: "3.20",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are secure Virtual Private Networks (VPNs) used for remote access to ensure secure communication?",
        policy: "3.21",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is it mandatory for all remote users to connect using VPN to maintain a secure connection?",
        policy: "3.22",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are procedures in place for regularly backing up data to prevent data loss?",
        policy: "3.23",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are backups stored at a fireproof, secure location physically distant from the data processing site?",
        policy: "3.24",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are secure methods employed for disposing of electronic media containing sensitive information (e.g., shredding, punching, physically damaging, degaussing)?",
        policy: "3.25",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is the internal information security audit program implemented within the organization to regularly assess and enhance security measures?",
        policy: "3.26",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Prior to any software application deployment, are Vulnerability Assessments and Penetration Testing (VAPTs) conducted through Sri Lanka CERT?",
        policy: "3.27",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "How often are Vulnerability Assessments and Penetration Testing (VAPTs) performed for the organization's computer network?",
        policy: "3.28",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are the work-from-home guidelines issued by Sri Lanka CERT adhered to within the organization to ensure a secure remote working environment?",
        policy: "3.29",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is there a formal procedure established for registering personal devices used within the organization?",
        policy: "3.30",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are personal devices prohibited from processing or storing critical data within the organization to mitigate security risks?",
        policy: "3.31",
      },
      {
        policyDomain: "Detection of Information Security Incidents",
        assessmentCriteria:
          "Have all staff members been instructed to promptly report any suspicious activities, contacts, thefts, viruses, vulnerabilities, unauthorized accesses, tampering with files, or violations of security policy to the designated person in charge of Information Security?",
        policy: "4.1",
      },
      {
        policyDomain: "Detection of Information Security Incidents",
        assessmentCriteria:
          "Are there established procedures within the organization to ensure prompt reporting of cyber security incidents to Sri Lanka CERT or any other relevant party?",
        policy: "4.2",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "Has the organization developed and maintained an Incident Response Plan outlining procedures to be followed in the event of information and cyber security incidents?",
        policy: "5.1",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "In the event of an information and cyber security incident, is the Incident Response Plan promptly activated to minimize the impact on operations and restore normalcy?",
        policy: "5.2",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "Has the organization developed a comprehensive Disaster Recovery Plan to facilitate the recovery process in the event of a disaster or disruptive event?",
        policy: "5.3",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "In the event of a disaster or significant disruptive event, is the Disaster Recovery Plan promptly activated to restore disrupted services and ensure continuity of critical operations?",
        policy: "5.4",
      },
      {
        policyDomain: "Bring Your Own Device",
        assessmentCriteria:
          "Have clear acceptable use guidelines been defined for personal devices used for work purposes, outlining both acceptable and prohibited activities, applications, and data handling practices?",
        policy: "6.1",
      },
      {
        policyDomain: "Bring Your Own Device",
        assessmentCriteria:
          "Are robust security measures, such as password protection, encryption of sensitive data, and regular installation of security updates and patches, required on all Bring Your Own Device (BYOD) devices?",
        policy: "6.2",
      },
      {
        policyDomain: "Bring Your Own Device",
        assessmentCriteria:
          "Is there a streamlined and easily accessible process established for employees to promptly report lost or stolen BYOD devices to the IT department or designated authority?",
        policy: "6.3",
      },
      {
        policyDomain: "Bring Your Own Device",
        assessmentCriteria:
          "Is there a mandatory registration and enrollment process in place for BYOD devices accessing company resources, including the installation of necessary security software and configuration of security settings?",
        policy: "6.4",
      },
      {
        policyDomain: "Bring Your Own Device",
        assessmentCriteria:
          "Does the organization utilize Mobile Device Management (MDM) or similar solutions to enable remote management and monitoring of BYOD devices, allowing for the enforcement of security policies, remote data wipes, and tracking of lost devices?",
        policy: "6.5",
      },
      {
        policyDomain: "Bring Your Own Device",
        assessmentCriteria:
          "Are employees encouraged to use containerization or segregated workspaces on BYOD devices to separate personal and work-related data, ensuring the security and integrity of company information?",
        policy: "6.6",
      },
      {
        policyDomain: "Bring Your Own Device",
        assessmentCriteria:
          "Are employees using BYOD devices provided with ongoing security awareness training covering topics such as phishing awareness, safe browsing habits, and the importance of adhering to BYOD security policies?",
        policy: "6.7",
      },
      {
        policyDomain: "Bring Your Own Device",
        assessmentCriteria:
          "Are regular security assessments and audits conducted on BYOD devices and their associated security controls to identify and address any vulnerabilities or compliance issues?",
        policy: "6.8",
      },

      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Has there been a review of the establishment of a formal IT governance framework, including roles, responsibilities, and decision-making processes for IT security stakeholders?",
        policy: "8.1",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Has a senior management representative been appointed to oversee the implementation and maintenance of Information Security within the organization?",
        policy: "8.2",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are regular risk assessments conducted to identify and prioritize IT security risks, guiding the development of security controls?",
        policy: "8.3",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Has an implementation of a continuous improvement process for Information Security been reviewed, ensuring that periodic assessments align with changes in the organization's IT environment and risk profile?",
        policy: "8.4",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Have clear roles and responsibilities been defined for IT security personnel, covering the development, implementation, and maintenance of security controls?",
        policy: "8.5",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are necessary training and resources provided for IT security personnel, including Information Security training and access to required tools and technologies?",
        policy: "8.6",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are IT security personnel aware of the organization's IT security policies and procedures, facilitating informed decision-making for IT asset protection?",
        policy: "8.7",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Has a process been established for reporting and investigating IT security incidents, ensuring prompt identification, investigation, and remediation?",
        policy: "8.8",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is there a continuous monitoring program in place to assess ongoing compliance with IT security policies, standards, and regulatory requirements?",
        policy: "8.9",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Has the organization established and enforced strong password policies?",
        policy: "9.1",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Do password policies include requirements such as length, complexity, and expiration?",
        policy: "9.2",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is multi-factor authentication (MFA) implemented for required sensitive systems and data?",
        policy: "9.3",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "What is the frequency and appropriateness of password change requirements?",
        policy: "9.4",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Do password complexity requirements align with industry best practices?",
        policy: "9.5",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Does the organization provide user awareness programs on password security?",
        policy: "9.6",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Do password management practices align with relevant regulatory requirements?",
        policy: "9.7",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are stored passwords encrypted or masked in the databases?",
        policy: "9.8",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Does the organization implement adaptive authentication mechanisms that dynamically adjust security controls based on risk assessments and user behavior?",
        policy: "9.9",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is there a well-defined and secure process for users to recover or reset their passwords, ensuring both security and user convenience?",
        policy: "9.10",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Does the organization employ monitoring and anomaly detection tools to identify suspicious or abnormal password-related activities?",
        policy: "9.11",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are there periodic security awareness training sessions specifically focused on password security for all users?",
        policy: "9.12",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is there a defined process for handling exceptions to the standard password policies, and is it consistently applied?",
        policy: "9.13",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is there integration between the password management system and the broader Identity and Access Management (IAM) framework?",
        policy: "9.14",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Has a policy for backup management been implemented within the organization?",
        policy: "10.1",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "How is the performance of backup restoration testing evaluated?",
        policy: "10.2",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are backups stored in a remote location, and is logging implemented when backups are sent?",
        policy: "10.3",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "How frequently are automated backups reviewed, especially for sensitive data?",
        policy: "10.4",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "How is recovery data protected, such as through encryption or data separation?",
        policy: "10.5",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is there maintenance of an isolated instance of recovery data using version control?",
        policy: "10.6",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is there a documented backup retention policy specifying the duration backups are retained, and is it consistently applied across different data types?",
        policy: "10.7",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Does the organization leverage cloud-based backup solutions, and if so, are these solutions compliant with security and privacy standards?",
        policy: "10.8",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is there integration between the backup and incident response plans to ensure timely restoration in the event of a security incident or data loss?",
        policy: "10.9",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are there monitoring tools in place to track the status of backup processes, and are alerts configured to notify relevant personnel in case of backup failures or anomalies?",
        policy: "10.10",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are backups configured in an immutable state, preventing unauthorized modifications or deletions?",
        policy: "10.11",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is there a versioning system in place for backups, and does it facilitate the retrieval of specific data versions when needed?",
        policy: "10.12",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Does the organization conduct continuous testing of backup and recovery processes to ensure resilience against evolving threats and changes in the IT environment?",
        policy: "10.13",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Are Vulnerability Assessments and Penetration Tests (VAPT) conducted within the organization?",
        policy: "11.1",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Are records of vulnerabilities and VAPT maintained within the organization?",
        policy: "11.2",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is there an available list of authorized end-user software within the organization?",
        policy: "11.3",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is VAPT performed periodically within the organization?",
        policy: "11.4",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Has the organization taken necessary actions to address findings from VAPT?",
        policy: "11.5",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "How effective is the vulnerability assessment process in identifying and prioritizing potential security risks?",
        policy: "11.6",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Does the organization have a patch management process in place to address vulnerabilities promptly after identification?",
        policy: "11.7",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is vulnerability management integrated with configuration management processes to ensure consistency and accuracy in identifying vulnerabilities across the environment?",
        policy: "11.8",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Does the organization collaborate with external sources to stay informed about emerging vulnerabilities relevant to its environment?",
        policy: "11.9",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Are there metrics and reporting mechanisms available for tracking the success of vulnerability management efforts?",
        policy: "11.10",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is there a documented timeline for remediating identified vulnerabilities, and is it consistently adhered to?",
        policy: "11.11",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Does the vulnerability management process consider asset criticality when prioritizing remediation efforts?",
        policy: "11.12",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Does the organization employ continuous monitoring mechanisms to identify and assess new vulnerabilities in a timely manner?",
        policy: "11.13",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Has the organization implemented a formalized procedure for identifying, documenting, and approving all changes?",
        policy: "12.1",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Do changes undergo meticulous planning and testing prior to implementation?",
        policy: "12.2",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is there a specific approach in place for evaluating the impact of changes?",
        policy: "12.3",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are thorough risk assessments conducted as a result of organizational changes?",
        policy: "12.4",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Have measures been implemented to effectively mitigate identified risks?",
        policy: "12.5",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are security controls reviewed and tested after changes are made?",
        policy: "12.6",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Was post-implementation testing, security controls testing, and security audits performed to validate effectiveness?",
        policy: "12.7",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is there effective communication of change details to all relevant parties?",
        policy: "12.8",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is there a process in place to comprehensively document changes and facilitate knowledge transfer to relevant personnel?",
        policy: "12.9",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Does the organization have a well-defined plan for rolling back changes in the event of unexpected issues, and is it periodically tested?",
        policy: "12.10",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Does the organization leverage automated tools for change management to streamline the change request, approval, and tracking processes?",
        policy: "12.11",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are there established metrics to measure the performance and effectiveness of the change management process, and are they regularly reviewed for continuous improvement?",
        policy: "12.12",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is the documentation related to changes easily accessible to authorized personnel, and is there a secure repository for change records?",
        policy: "12.13",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Does the organization maintain an up-to-date inventory of all hardware and software assets?",
        policy: "13.1",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "How accurate and complete is the inventory, particularly regarding critical details like version numbers and dependencies?",
        policy: "13.2",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Are there effective processes in place for prioritizing patches based on vulnerability criticality and potential business impact?",
        policy: "13.3",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Does the organization maintain a testing environment mirroring the production environment for patch validation?",
        policy: "13.4",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is there a streamlined process for applying critical patches during emergency situations?",
        policy: "13.5",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Has the organization implemented automated tools for patch deployment?",
        policy: "13.6",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Are detailed records of applied patches maintained, including dates, versions, and encountered issues?",
        policy: "13.7",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is there integration between the patch management process and the organization's change management system to ensure coordination and communication?",
        policy: "13.8",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "How effective is communication with vendors to stay informed about upcoming patches, known vulnerabilities, and recommended mitigation strategies?",
        policy: "13.9",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Does the organization have a documented plan for patch rollback in case of unexpected issues, and is it periodically tested?",
        policy: "13.10",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "How are reporting and metrics related to patch management, such as compliance with patching timelines and vulnerability resolution, handled?",
        policy: "13.11",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is the patch management process integrated with endpoint security solutions for comprehensive coverage and visibility into endpoint patch status?",
        policy: "13.12",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are access control mechanisms in place on doors, and is logging implemented to track entry and exit?",
        policy: "14.1",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are entry restrictions enforced for sensitive zones, and are security cameras deployed for added surveillance?",
        policy: "14.2",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "How is equipment resilience evaluated against hazards such as fire, flood, and earthquakes, and are controls maintained and tested regularly?",
        policy: "14.3",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are access restrictions in place for data centers, including the use of cameras and effective blocking of unauthorized devices?",
        policy: "14.4",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Is access limited, guards employed, and CCTV monitoring implemented, with registration and inspection of incoming items?",
        policy: "14.5",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "What security controls are in place for server rooms, including access restrictions and monitoring?",
        policy: "14.6",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Does the organization utilize biometric access controls for sensitive areas to provide an additional layer of identity verification?",
        policy: "14.7",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are physical intrusion detection systems, such as motion sensors or alarms, implemented to detect unauthorized access attempts?",
        policy: "14.8",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are environmental controls, such as fire suppression systems and temperature controls, regularly tested for effectiveness and reliability?",
        policy: "14.9",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "How are procedures for secure disposal of sensitive materials and equipment managed, ensuring compliance with regulations?",
        policy: "14.10",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Does the organization have an emergency response plan for physical security incidents, including procedures for handling natural disasters or security breaches?",
        policy: "14.11",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Does the organization have a documented policy for comprehensive event logging, including explicit definitions of event types?",
        policy: "15.1",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Is there a comprehensive inventory covering all systems, applications, and network components generating log events?",
        policy: "15.2",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Are administrator and operator activities systematically logged, and are regular reviews conducted to detect unauthorized or suspicious actions?",
        policy: "15.3",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "What is the organization's practice regarding the retention period for event logs?",
        policy: "15.4",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Are real-time log generation, continuous monitoring, and automatic alert mechanisms implemented during critical events?",
        policy: "15.5",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "What procedures does the organization follow for regularly backing up logs and protecting them from unauthorized access?",
        policy: "15.6",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Does the organization adhere to a policy for clock synchronization across critical systems and applications, including documented time sources and testing mechanisms?",
        policy: "15.7",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "What procedures are in place to verify the integrity of logs and ensure they have not been tampered with?",
        policy: "15.8",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Does the organization log user activities, particularly interactions with sensitive data and critical systems?",
        policy: "15.9",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "How often is the log retention policy reviewed and updated to align with regulatory requirements and organizational needs?",
        policy: "15.10",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Does the organization integrate logs with a Security Information and Event Management (SIEM) system for centralized log analysis and correlation?",
        policy: "15.11",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Do personnel responsible for log analysis receive regular training to enhance their skills in identifying patterns, anomalies, and potential security incidents from log data?",
        policy: "15.12",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "How are network controls, such as VLANs, implemented to safeguard our information systems?",
        policy: "16.1",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "What measures are in place to restrict connections to our network for enhanced security?",
        policy: "16.2",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "How do we protect our public-facing networks to ensure robust security measures?",
        policy: "16.3",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "How are network-related service levels defined and monitored within our organization?",
        policy: "16.4",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Can you elaborate on our organization's practice of defining and monitoring network-related service levels?",
        policy: "16.5",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "How do we implement Network Access Control (NAC) mechanisms to manage and restrict access based on device health and user identity?",
        policy: "16.6",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "What measures do we have in place for Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) to detect and respond to network threats?",
        policy: "16.7",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "How do we implement network segmentation to isolate critical assets and limit lateral movement in the event of a security breach?",
        policy: "16.8",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "How do we ensure continuous network monitoring to promptly identify and respond to anomalous activities within our retail environment?",
        policy: "16.9",
      },

      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "How do we monitor and project capacity for all hardware resources, utilities, software, and personnel within our retail organization?",
        policy: "17.1",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Can you verify how we identify capacity requirements for all systems, considering their business criticality?",
        policy: "17.2",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "How do we ensure continuous monitoring and tuning of resources to maintain the required system performance in our retail environment?",
        policy: "17.3",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "What detective controls do we have in place to indicate problems in a timely manner across our retail operations?",
        policy: "17.4",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "How do we assess scalability to ensure our systems can handle increased loads and demands, especially during peak retail periods?",
        policy: "17.5",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Have we conducted a business impact analysis related to capacity management to identify potential impacts on critical business processes within our retail operations?",
        policy: "17.6",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "What strategies do we employ for optimizing resource usage, including dynamic resource allocation and de-allocation based on demand, in our retail environment?",
        policy: "17.7",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Can you confirm the existence and regular updating of comprehensive capacity planning documentation covering hardware, software, and personnel across our retail organization?",
        policy: "17.8",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Do we have comprehensive incident response procedures covering planning, preparation, and logging activities throughout our retail organization?",
        policy: "18.1",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "How effective are our procedures for monitoring, detecting, analyzing, and reporting information security events and incidents across our retail operations?",
        policy: "18.2",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Can we assess the competence of individuals responsible for handling incidents within our retail organization, ensuring they possess the necessary skills and training?",
        policy: "18.3",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Are Root Cause Analyses (RCAs) conducted for incidents within our retail organization to determine corrective and preventive actions, with lessons learned communicated to relevant parties?",
        policy: "18.4",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "What guidelines do we have for incident classification and prioritization in our retail operations, ensuring a systematic approach to incident response?",
        policy: "18.5",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "How do we incorporate continuous improvement mechanisms within our incident response procedures, with regular reviews and updates based on lessons learned and emerging threats within our retail organization?",
        policy: "18.6",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "To what extent do we facilitate cross-functional collaboration during incident response within our retail organization, ensuring effective communication and coordination among relevant teams?",
        policy: "18.7",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Are we leveraging automated incident response tools to enhance the efficiency and speed of incident detection, containment, and remediation across our retail operations?",
        policy: "18.8",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Have we implemented a comprehensive supplier and vendor management policy within our retail organization, outlining key processes and responsibilities?",
        policy: "19.1",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "What monitoring processes do we have in place for suppliers across our retail operations to ensure active oversight and timely identification and addressing of potential risks?",
        policy: "19.2",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Have we established Service Level Agreements (SLAs) and Non-Disclosure Agreements (NDAs) with our suppliers, and do they align with our information security objectives?",
        policy: "19.3",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Are information security requirements, incident handling processes, and adherence to industry best practices adequately included in our agreements with suppliers?",
        policy: "19.4",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "How effectively do we incorporate information security requirements and monitoring processes into our supplier agreements to enhance security collaboration across our retail organization?",
        policy: "19.5",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Have we defined and implemented minimum information security requirements for our suppliers based on required access levels, ensuring alignment with our organizational security policies?",
        policy: "19.6",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Have we conducted third-party security assessments to evaluate the resilience and information security posture of key suppliers within our retail supply chain?",
        policy: "19.7",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "What mechanisms do we have in place to ensure continuous improvement in supplier security, including regular reviews, feedback mechanisms, and collaborative initiatives across our retail organization?",
        policy: "19.8",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "How effective are our processes for verifying supplier compliance with information security requirements, legal obligations, and industry standards within our retail operations?",
        policy: "19.9",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Have we verified that our Business Continuity Plan (BCP) adequately addresses the continuity of information security, including data protection and incident response, within our retail organization?",
        policy: "20.1",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "How do we evaluate our incident response personnel to ensure they possess the necessary responsibility, authority, and competence to effectively manage security incidents during business disruptions in our retail operations?",
        policy: "20.2",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Have documented plans and recovery procedures been reviewed and approved, ensuring their availability and alignment with information security requirements across our retail organization?",
        policy: "20.3",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "How do we evaluate the effectiveness of Business Continuity Plan (BCP) testing, particularly concerning information security controls during simulated disaster recovery scenarios within our retail operations?",
        policy: "20.4",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "What measures are in place to review and ensure the adequacy and effectiveness of training programs for incident response personnel in responding to security incidents during disruptions within our retail organization?",
        policy: "20.5",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Does our retail organization consider cyber insurance (First-party/Third-party) as part of its risk management strategy, and how do we assess coverage adequacy and alignment with information security objectives?",
        policy: "20.6",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "How often do we conduct collaborative exercises with relevant stakeholders to validate and improve the coordination and communication aspects of our Business Continuity and Disaster Recovery plans in our retail operations?",
        policy: "20.7",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "What mechanisms are in place for continuous improvement within our Business Continuity and Disaster Recovery plans, including regular reviews and updates based on lessons learned and emerging threats within our retail organization?",
        policy: "20.8",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "How do we assess and document our retail organization's external dependencies, including third-party services, and incorporate them into our Business Continuity and Disaster Recovery plans?",
        policy: "20.9",
      },
      {
        policyDomain: "Mobile Device Management",
        assessmentCriteria:
          "Have you mandated the installation and activation of Mobile Device Management software on all company-issued mobile devices?",
        policy: "21.1",
      },
      {
        policyDomain: "Mobile Device Management",
        assessmentCriteria:
          "Is device encryption enabled on all company-issued mobile devices to comply with industry standards and data protection regulations?",
        policy: "21.2",
      },
      {
        policyDomain: "Mobile Device Management",
        assessmentCriteria:
          "Have you enabled remote wipe capabilities on all company-issued mobile devices to allow for immediate erasure of data in case of loss or theft?",
        policy: "21.3",
      },
      {
        policyDomain: "Mobile Device Management",
        assessmentCriteria:
          "Are you implementing continuous monitoring to ensure compliance with security policies on all company-issued mobile devices?",
        policy: "21.4",
      },
      {
        policyDomain: "Mobile Device Management",
        assessmentCriteria:
          "Have you provided comprehensive training to employees on the importance of MDM policies and usage?",
        policy: "21.5",
      },
      {
        policyDomain: "Mobile Device Management",
        assessmentCriteria:
          "Do you conduct regular audits and generate reports to assess MDM configurations and device compliance?",
        policy: "21.6",
      },
      {
        policyDomain: "Mobile Device Management",
        assessmentCriteria:
          "Are your MDM policies integrated with the organization's incident response plan?",
        policy: "21.7",
      },
      {
        policyDomain: "Mobile Device Management",
        assessmentCriteria:
          "Have you implemented procedures for timely updates and patches to MDM software?",
        policy: "21.8",
      },
      {
        policyDomain: "Secure Payment Card Industry",
        assessmentCriteria:
          "Is strong encryption used for all data transmitted through the payment gateway? Does your payment gateway adhere to PCI DSS and other applicable standards?",
        policy: "21.8",
      },
      {
        policyDomain: "Secure Payment Card Industry",
        assessmentCriteria:
          "Are strict access controls and multi-factor authentication used for accessing payment gateway systems?",
        policy: "21.9",
      },
      {
        policyDomain: "Secure Payment Card Industry",
        assessmentCriteria:
          "Is continuous monitoring and logging of all transactions through the payment gateway in place?",
        policy: "21.10",
      },
      {
        policyDomain: "Secure Payment Card Industry",
        assessmentCriteria:
          "Are advanced fraud detection technologies used to prevent fraudulent transactions?",
        policy: "21.11",
      },
      {
        policyDomain: "Secure Payment Card Industry",
        assessmentCriteria:
          "Is data integrity maintained throughout the transaction process with validation mechanisms like data hashing?",
        policy: "21.12",
      },
      {
        policyDomain: "Secure Payment Card Industry",
        assessmentCriteria:
          "Are security requirements and ongoing monitoring enforced for third-party service providers?",
        policy: "21.13",
      },
      {
        policyDomain: "Secure Payment Card Industry",
        assessmentCriteria:
          "Are protocols for responding to security incidents within the payment gateway established?",
        policy: "21.14",
      },
      {
        policyDomain: "Secure Payment Card Industry",
        assessmentCriteria:
          "Do you have a business continuity plan for major disruptions affecting the payment gateway?",
        policy: "21.15",
      },
      {
        policyDomain: "Secure Payment Card Industry",
        assessmentCriteria:
          "Are all employees involved with the payment gateway regularly trained on security practices?",
        policy: "21.16",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Are guidelines established for the collection, use, and protection of personal information in compliance with data protection laws?",
        policy: "22.1",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Are security controls in place to protect data from unauthorized access or breaches?",
        policy: "22.2",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Are there established timeframes and procedures for the safe disposal of customer data when no longer needed?",
        policy: "22.3",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Is access to customer data controlled and limited only to employees who require it to perform their duties?",
        policy: "22.4",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Are there procedures in place for responding to data breaches and notifying affected parties?",
        policy: "22.5",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Is customer data encrypted during storage and transmission?",
        policy: "22.6",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Do you manage risks associated with third-party data sharing with proper security assessments?",
        policy: "22.7",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Are employees regularly trained on data protection principles and security practices?",
        policy: "22.8",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Are frequent audits conducted to ensure compliance with data protection regulations?",
        policy: "22.9",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Is customer data's accuracy and completeness maintained throughout its lifecycle?",
        policy: "22.10",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Is regular security awareness training conducted for all employees?",
        policy: "23.1",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Are employees provided with training specific to their roles, especially for sensitive or critical positions?",
        policy: "23.2",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Is compliance training provided relevant to employees' specific duties, such as HIPAA, PCI DSS, or GDPR?",
        policy: "23.3",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Is specialized training on phishing recognition and response conducted regularly?",
        policy: "23.4",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Are employees trained on the importance of data privacy and the proper handling of sensitive information?",
        policy: "23.5",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Are employees educated on physical security protocols for securing workspaces and managing visitors?",
        policy: "23.6",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Are employees instructed on cybersecurity best practices, including secure browsing and device usage?",
        policy: "23.7",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Are employees trained on how to respond to emergencies, including evacuation procedures?",
        policy: "23.8",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Is continuous learning and skill development encouraged among employees?",
        policy: "23.9",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Are mechanisms in place to obtain feedback on training effectiveness and to assess knowledge retention?",
        policy: "23.10",
      },
    ],
  },
  {
    category: "Telecommunication Services",
    policyDomain: "Information and Cyber Security Governance",
    checklists: [
      {
        policyDomain: "Information Security",
        assessmentCriteria:
          "Is there an appointed Information Security Officer (ISO) responsible for overseeing information and cyber security?",
        policy: "1.1",
      },
      {
        policyDomain: "Information Security",
        assessmentCriteria:
          "Are the information and cyber security responsibilities of the ISO clearly defined and assigned?",
        policy: "1.2",
      },
      {
        policyDomain: "Information Security",
        assessmentCriteria:
          "In the absence of an ISO, are information and cyber security responsibilities assigned to the Chief Information Officer (CIO) or the designated IT officer?",
        policy: "1.3",
      },
      {
        policyDomain: "Information Security",
        assessmentCriteria:
          "Are information security audit responsibilities assigned to the (Chief) Information Auditor (IA) to ensure regular and thorough assessments?",
        policy: "1.4",
      },
      {
        policyDomain: "Information Security",
        assessmentCriteria:
          "Has a committee been established to make decisions on information and cyber security matters?",
        policy: "1.5",
      },
      {
        policyDomain: "Information Security",
        assessmentCriteria:
          "Is there a separate committee dedicated to making decisions on information and cyber security risks?",
        policy: "1.6",
      },
      {
        policyDomain: "Information Security",
        assessmentCriteria:
          "Are end-user responsibilities regarding information and cyber security clearly communicated and explained?",
        policy: "1.7",
      },
      {
        policyDomain: "Information Security",
        assessmentCriteria:
          "Are proactive steps taken to develop the information security capacity of accountable individuals through training and awareness programs?",
        policy: "1.8",
      },
      {
        policyDomain: "Information Security",
        assessmentCriteria:
          "Are background checks and security clearances conducted for officials dealing with Secret or Confidential information assets or having access to Critical National Information Infrastructure (CNII)?",
        policy: "1.9",
      },
      {
        policyDomain: "Information Security",
        assessmentCriteria:
          "Is information security considered in the design and implementation of the organization’s functions, policies, strategies, or projects?",
        policy: "1.10",
      },
      {
        policyDomain: "Information Security",
        assessmentCriteria:
          "Is there a budget allocated to support information security activities and initiatives?",
        policy: "1.11",
      },
      {
        policyDomain: "Information Security",
        assessmentCriteria:
          "Have objective action plans been developed and implemented to achieve the organization's information security objectives, ensuring a systematic and measurable approach?",
        policy: "1.12",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are information assets systematically identified based on their value to the organization?",
        policy: "2.1",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Is risk assessment conducted to evaluate and quantify the risks associated with identified information assets?",
        policy: "2.2",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Is the value of information assets periodically reassessed to ensure alignment with organizational priorities and changes?",
        policy: "2.3",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are risk assessments associated with information assets regularly reassessed and updated to address evolving threats and vulnerabilities?",
        policy: "2.4",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are information assets classified based on sensitivity or other relevant criteria to establish appropriate protective measures?",
        policy: "2.5",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Is there an IT Assets Register maintained to record and track all IT assets within the organization?",
        policy: "2.6",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are IT assets classified based on their criticality to the organization's operations and overall security posture?",
        policy: "2.7",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are owners clearly identified and designated for each information and IT asset to ensure accountability and responsibility?",
        policy: "2.8",
      },

      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is sensitive information encrypted prior to storage to safeguard data integrity and confidentiality?",
        policy: "3.1",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is sensitive information encrypted before transmission through electronic channels to prevent unauthorized access during transit?",
        policy: "3.2",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is sensitive information only processed or stored in designated secure areas with appropriate physical and environmental controls?",
        policy: "3.3",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are measures implemented to protect secure areas from fire, flood, humidity, and temperature to ensure the integrity and availability of stored information?",
        policy: "3.4",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are protocols and controls established to prevent unauthorized access to secure areas?",
        policy: "3.5",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is sensitive information consistently processed or stored in secure areas to maintain security standards?",
        policy: "3.6",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are appropriate measures adopted to protect secure areas from environmental risks such as fire, flood, humidity, and temperature?",
        policy: "3.7",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are measures in place to continue enforcing prevention of unauthorized entry to secure areas?",
        policy: "3.8",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is there an Identity Management and Access Control Policy in place to regulate access to information systems and assets?",
        policy: "3.9",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are strong authentication methods utilized to enhance access security and protect against unauthorized access?",
        policy: "3.10",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is compliance ensured with data sovereignty regulations and policies in the processing and storage of information?",
        policy: "3.11",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is a thorough risk assessment conducted before obtaining cloud services to mitigate potential security risks?",
        policy: "3.12",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are all operating systems used by the organization ensured to have valid licenses?",
        policy: "3.13",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are organization operating systems regularly updated with the latest patches and fixes supplied by the vendor?",
        policy: "3.14",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are procedures established to ensure the timely installation of critical patches supplied by vendors?",
        policy: "3.15",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is antimalware software with valid licenses installed on all machines to protect against malicious software?",
        policy: "3.16",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are users restricted from using personal emails for official communications to prevent security risks?",
        policy: "3.17",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are email filters set up to detect and remove emails known to have malware attached?",
        policy: "3.18",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is encryption utilized when sending sensitive information via email to maintain confidentiality?",
        policy: "3.19",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are firewalls deployed within the computer network to control and monitor incoming and outgoing network traffic?",
        policy: "3.20",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are secure Virtual Private Networks (VPNs) used for remote access to ensure secure communication?",
        policy: "3.21",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is it ensured that all users connecting remotely use VPN to maintain a secure connection?",
        policy: "3.22",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are procedures established for regularly backing up data to prevent data loss?",
        policy: "3.23",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are backups stored at a fireproof, secure location physically distant from the data processing site?",
        policy: "3.24",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are secure methods (e.g., shredding, punching, physically damaging, degaussing) followed for disposing of electronic media containing sensitive information?",
        policy: "3.25",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is an internal information security audit program implemented to regularly assess and enhance security measures?",
        policy: "3.26",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are Vulnerability Assessments and Penetration Testing (VAPTs) conducted through Sri Lanka CERT prior to any software application deployment?",
        policy: "3.27",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are regular Vulnerability Assessments and Penetration Testing conducted for the computer network?",
        policy: "3.28",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is adherence ensured to work-from-home guidelines issued by Sri Lanka CERT to ensure a secure remote working environment?",
        policy: "3.29",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is there a formal procedure for registering personal devices used within the organization?",
        policy: "3.30",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are personal devices prohibited from processing or storing critical data to prevent security risks?",
        policy: "3.31",
      },
      {
        policyDomain: "Detection of Information Security Incidents",
        assessmentCriteria:
          "Are all staff instructed to promptly report any suspicious activity, contact, theft, virus, vulnerability, unauthorized access, tampering with files, or violation of security policy to the designated person in charge of Information Security?",
        policy: "4.1",
      },
      {
        policyDomain: "Detection of Information Security Incidents",
        assessmentCriteria:
          "Is the organization required to report cyber security incidents promptly to Sri Lanka CERT or any other relevant party as per established reporting procedures?",
        policy: "4.2",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "Has the organization developed and maintained an Incident Response Plan outlining procedures to be followed in the event of information and cyber security incidents?",
        policy: "5.1",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "In the event of an information and cyber security incident, is the Incident Response Plan promptly activated to minimize the impact on operations and restore normalcy?",
        policy: "5.2",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "Does the organization have a comprehensive Disaster Recovery Plan developed to facilitate the recovery process in the event of a disaster or disruptive event?",
        policy: "5.3",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "In the event of a disaster or any significant disruptive event, is the Disaster Recovery Plan promptly activated to restore disrupted services and ensure continuity of critical operations?",
        policy: "5.4",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Are unique identifiers assigned to each user in the organization?",
        policy: "7.1",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Do the authorization policies emphasize least privilege and separation of duties?",
        policy: "7.2",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Are there established procedures for granting access to new users and revoking access when necessary?",
        policy: "7.3",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Are user access rights periodically reviewed to ensure appropriateness and security?",
        policy: "7.4",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Is physical entry to secure areas within the organization controlled to prevent unauthorized access?",
        policy: "7.5",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Is remote access to organizational resources regulated, ensuring security and approval through designated methods and devices?",
        policy: "7.6",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Are security incidents promptly reported, and are there established procedures for addressing access control violations?",
        policy: "7.7",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Is ongoing education provided on access control policies, and is security awareness promoted among all users?",
        policy: "7.8",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Do access control policies comply with legal and regulatory requirements, with established penalties for violations?",
        policy: "7.9",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is there a formal IT governance framework in place?",
        policy: "8.1",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is a senior management representative appointed to oversee IT security?",
        policy: "8.2",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are regular risk assessments conducted to identify and prioritize IT security risks?",
        policy: "8.3",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is there a continuous improvement process for IT security in place?",
        policy: "8.4",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are roles and responsibilities for IT security personnel clearly defined and communicated?",
        policy: "8.5",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are IT security personnel provided with necessary training and resources?",
        policy: "8.6",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are all IT security personnel aware of the organization's IT security policies and procedures?",
        policy: "8.7",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is there a formal process for reporting and investigating IT security incidents?",
        policy: "8.8",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is there a continuous monitoring program in place to assess compliance with IT security policies?",
        policy: "8.9",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Has the organization established and enforced strong password policies?",
        policy: "9.1",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is multi-factor authentication implemented for sensitive systems and data?",
        policy: "9.2",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Do password complexity requirements align with industry best practices?",
        policy: "9.3",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Does the organization provide user awareness programs on password security?",
        policy: "9.4",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are password management practices in alignment with relevant regulatory requirements?",
        policy: "9.5",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are stored passwords encrypted or masked in databases?",
        policy: "9.6",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Does the organization implement adaptive authentication mechanisms?",
        policy: "9.7",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is there a secure and user-friendly process for password recovery?",
        policy: "9.8",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are monitoring and anomaly detection tools used for identifying suspicious password activities?",
        policy: "9.9",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are periodic security awareness training sessions on password security conducted?",
        policy: "9.10",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is there a defined process for handling exceptions to standard password policies?",
        policy: "9.11",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is the password management system integrated with the broader Identity and Access Management (IAM) framework?",
        policy: "9.12",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is a backup management policy formally implemented?",
        policy: "10.1",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is backup restoration testing regularly performed?",
        policy: "10.2",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are backups stored remotely and their transport logged?",
        policy: "10.3",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are automated backups conducted as needed for sensitive data?",
        policy: "10.4",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is recovery data protected through encryption or data separation?",
        policy: "10.5",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is there a documented backup retention policy, consistently applied across data types?",
        policy: "10.6",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Does the organization utilize cloud-based backup solutions compliant with security standards?",
        policy: "10.7",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are backup and incident response plans integrated?",
        policy: "10.8",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are there monitoring tools and alerts configured for backup processes?",
        policy: "10.9",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria: "Are backups configured to be immutable?",
        policy: "10.10",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is there a versioning system in place for backups?",
        policy: "10.11",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is continuous testing of backup and recovery processes conducted?",
        policy: "10.12",
      },
      {
        policyDomain: "Chanage Management",
        assessmentCriteria:
          "Are Vulnerability Assessments and Penetration Tests (VAPT) conducted regularly?",
        policy: "11.1",
      },
      {
        policyDomain: "Chanage Management",
        assessmentCriteria:
          "Is there an authorized end-user software list available?",
        policy: "11.2",
      },
      {
        policyDomain: "Chanage Management",
        assessmentCriteria: "Is VAPT performed periodically?",
        policy: "11.3",
      },
      {
        policyDomain: "Chanage Management",
        assessmentCriteria:
          "Has the organization taken necessary actions to address findings from VAPTs?",
        policy: "11.4",
      },
      {
        policyDomain: "Chanage Management",
        assessmentCriteria:
          "Is the vulnerability assessment process effective in identifying potential security risks?",
        policy: "11.5",
      },
      {
        policyDomain: "Chanage Management",
        assessmentCriteria:
          "Is there an effective patch management process in place?",
        policy: "11.6",
      },
      {
        policyDomain: "Chanage Management",
        assessmentCriteria:
          "Is vulnerability management integrated with configuration management processes?",
        policy: "11.7",
      },
      {
        policyDomain: "Chanage Management",
        assessmentCriteria:
          "Does the organization collaborate with external sources for information on vulnerabilities?",
        policy: "11.8",
      },
      {
        policyDomain: "Chanage Management",
        assessmentCriteria:
          "Are effective metrics and reporting mechanisms in place for vulnerability management?",
        policy: "11.9",
      },
      {
        policyDomain: "Chanage Management",
        assessmentCriteria:
          "Is there a documented timeline for vulnerability remediation that is consistently followed?",
        policy: "11.10",
      },
      {
        policyDomain: "Chanage Management",
        assessmentCriteria:
          "Does the vulnerability management process consider asset criticality for prioritization?",
        policy: "11.11",
      },
      {
        policyDomain: "Chanage Management",
        assessmentCriteria:
          "Is continuous monitoring for new vulnerabilities employed?",
        policy: "11.12",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Has your organization implemented a secure development environment?",
        policy: "13.1",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are development environments segregated to prevent unauthorized access?",
        policy: "13.2",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are secure coding standards used and regular code reviews conducted to identify vulnerabilities?",
        policy: "13.3",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Is application penetration testing conducted regularly?",
        policy: "13.4",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are developers trained in application security and secure coding practices?",
        policy: "13.5",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are production and non-production systems clearly separated?",
        policy: "13.6",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are standard hardening configuration templates used for application infrastructure?",
        policy: "13.7",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are up-to-date and trusted third-party software components used in development?",
        policy: "13.8",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Do your policies ensure a secure environment throughout the software development lifecycle?",
        policy: "13.9",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are DevSecOps principles integrated into the software development lifecycle?",
        policy: "13.10",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are there specific guidelines and controls in place for secure API development?",
        policy: "13.11",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Is there integration between software development processes and incident response plans?",
        policy: "13.12",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Is threat modeling used during the design phase to identify security threats?",
        policy: "13.13",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Do developers receive ongoing security training to stay updated on threats and best practices?",
        policy: "13.14",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Does your organization maintain an up-to-date inventory of all hardware and software assets?",
        policy: "14.1",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Are patches prioritized based on the criticality of vulnerabilities and business impact?",
        policy: "14.2",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is there a testing environment that mirrors the production environment for patch validation?",
        policy: "14.3",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is there a streamlined process for applying critical patches in emergencies?",
        policy: "14.4",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria: "Are automated tools used for deploying patches?",
        policy: "14.5",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Are detailed records of applied patches maintained?",
        policy: "14.6",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is the patch management process integrated with the organization’s change management system?",
        policy: "14.7",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is there effective communication with vendors regarding patches and vulnerabilities?",
        policy: "14.8",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is there a plan for rolling back patches if they cause issues, and is it periodically tested?",
        policy: "14.9",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Are reporting and metrics related to patch management effectively maintained?",
        policy: "14.10",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is the patch management process integrated with endpoint security solutions?",
        policy: "14.11",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are access control mechanisms used to restrict entry to sensitive zones?",
        policy: "15.1",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Is equipment tested and maintained against hazards like fire, floods, and earthquakes?",
        policy: "15.2",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are data center access restrictions enforced with additional surveillance measures?",
        policy: "15.3",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are server room security controls, including access restrictions, adequately enforced?",
        policy: "15.4",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Does your organization use biometric controls for access to sensitive areas?",
        policy: "15.5",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are physical intrusion detection systems like motion sensors or alarms in place?",
        policy: "15.6",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are environmental controls regularly tested for effectiveness?",
        policy: "15.7",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are secure disposal procedures for sensitive materials and equipment followed?",
        policy: "15.8",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Is there a comprehensive emergency response plan for physical security incidents?",
        policy: "15.9",
      },
      {
        policyDomain: "Critical Infrastructure Protection",
        assessmentCriteria:
          "Is the risk assessment tailored to the specific types of critical infrastructure within the energy and utility sector?",
        policy: "16.1",
      },
      {
        policyDomain: "Critical Infrastructure Protection",
        assessmentCriteria:
          "Are standards and technologies specified for physically fortifying critical infrastructure facilities against physical threats?",
        policy: "16.2",
      },
      {
        policyDomain: "Critical Infrastructure Protection",
        assessmentCriteria:
          "Does the cybersecurity policy focus on securing systems essential to energy and utility operations, including industrial control systems and operational technology?",
        policy: "16.3",
      },
      {
        policyDomain: "Critical Infrastructure Protection",
        assessmentCriteria:
          "Are ultra-strict access controls implemented for physical and digital access to highly sensitive areas of critical infrastructure?",
        policy: "16.4",
      },
      {
        policyDomain: "Critical Infrastructure Protection",
        assessmentCriteria:
          "Have comprehensive emergency response plans been developed for various types of crises that could impact energy and utility infrastructure?",
        policy: "16.5",
      },
      {
        policyDomain: "Critical Infrastructure Protection",
        assessmentCriteria:
          "Is the security and reliability of the supply chain supporting critical infrastructure ensured through vetting of suppliers and secure transportation methods?",
        policy: "16.6",
      },
      {
        policyDomain: "Critical Infrastructure Protection",
        assessmentCriteria:
          "Are redundant systems and failover mechanisms implemented to ensure continuous operation during incidents?",
        policy: "16.7",
      },
      {
        policyDomain: "Critical Infrastructure Protection",
        assessmentCriteria:
          "Does the organization provide specialized security training and simulation exercises tailored to the challenges of protecting energy and utility infrastructure?",
        policy: "16.8",
      },
      {
        policyDomain: "Critical Infrastructure Protection",
        assessmentCriteria:
          "Is regulatory compliance ensured with all governmental regulations specific to the energy and utility sector?",
        policy: "16.9",
      },
      {
        policyDomain: "Critical Infrastructure Protection",
        assessmentCriteria:
          "Is there strategic information sharing and collaboration with governmental bodies, other critical infrastructure entities, and international counterparts to enhance collective security and response capabilities?",
        policy: "16.10",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Does your organization have a documented policy for comprehensive event logging?",
        policy: "17.1",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Are administrator and operator activities systematically logged and reviewed?",
        policy: "17.2",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Are event logs retained for an adequate period as defined by organizational needs?",
        policy: "17.3",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Is real-time log generation and monitoring implemented with automatic critical event alerts?",
        policy: "17.4",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Are logs regularly backed up and protected from unauthorized access?",
        policy: "17.5",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Is there a policy for clock synchronization across critical systems and applications?",
        policy: "17.6",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Are procedures in place to verify the integrity of logs?",
        policy: "17.7",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Are user activities, especially regarding sensitive data, comprehensively logged?",
        policy: "17.8",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Is the log retention policy periodically reviewed and updated?",
        policy: "17.9",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Are logs integrated with a SIEM system for centralized analysis?",
        policy: "17.10",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Are personnel responsible for log analysis regularly trained?",
        policy: "17.11",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Are network controls like VLANs implemented to safeguard information systems?",
        policy: "18.1",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Are network connections restricted to enhance security?",
        policy: "18.2",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Are measures in place to protect public-facing networks?",
        policy: "18.3",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Is network access control implemented to manage and restrict access based on criteria?",
        policy: "18.4",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Are intrusion detection and prevention systems deployed across the network?",
        policy: "18.5",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Is network segmentation implemented to isolate critical assets?",
        policy: "18.6",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Is continuous network monitoring in place to identify and respond to anomalies?",
        policy: "18.7",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Is monitoring and capacity projections conducted for all hardware resources, utilities, software, and personnel?",
        policy: "19.1",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Are capacity requirements identified for all systems, considering their business criticality?",
        policy: "19.2",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Is continuous monitoring and tuning of resources consistently performed to maintain the required system performance?",
        policy: "19.3",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Are there detective controls in place to indicate problems in a timely manner?",
        policy: "19.4",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Is there a process in place to assess the organization's scalability to handle increased loads and demands?",
        policy: "19.5",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Has a business impact analysis related to capacity management been conducted?",
        policy: "19.6",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Are there strategies in place for optimizing resource usage, including dynamic resource allocation and de-allocation based on demand?",
        policy: "19.7",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Is there comprehensive capacity planning documentation covering hardware, software, and personnel, and is it regularly updated?",
        policy: "19.8",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Are comprehensive incident response procedures in place, covering planning, preparation, and logging activities?",
        policy: "20.1",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Are procedures for monitoring, detecting, analyzing, and reporting information security events and incidents effective?",
        policy: "20.2",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Do individuals responsible for handling incidents possess the necessary skills and training?",
        policy: "20.3",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Is Root Cause Analysis (RCA) conducted for incidents to determine corrective and preventive actions, with lessons learned communicated to relevant parties?",
        policy: "20.4",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Are there guidelines for incident classification and prioritization, ensuring a systematic approach to incident response?",
        policy: "20.5",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Are there continuous improvement mechanisms within incident response procedures, with regular reviews and updates based on lessons learned and emerging threats?",
        policy: "20.6",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Is there effective cross-functional collaboration during incident response, ensuring communication and coordination among relevant teams?",
        policy: "20.7",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Are automated incident response tools utilized to enhance the efficiency and speed of incident detection, containment, and remediation?",
        policy: "20.8",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Has your organization implemented a comprehensive supplier and vendor management policy outlining key processes and responsibilities?",
        policy: "21.1",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Are there effective monitoring processes in place for suppliers to identify and address potential risks in a timely manner?",
        policy: "21.2",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Have Service Level Agreements (SLA) and Non-Disclosure Agreements (NDA) been established within supplier relationships in alignment with information security objectives?",
        policy: "21.3",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Are information security requirements, including incident handling and screening requirements, incorporated in supplier agreements?",
        policy: "21.4",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Do supplier agreements include specific information security requirements and monitoring processes to enhance security collaboration?",
        policy: "21.5",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Are minimum information security requirements clearly defined and implemented based on required access levels and aligned with organizational security policies?",
        policy: "21.6",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Has your organization performed third-party security assessments to evaluate the resilience and information security posture of key suppliers?",
        policy: "21.7",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Are there mechanisms for continuous improvement in supplier security, such as regular reviews and collaborative initiatives?",
        policy: "21.8",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Are there effective processes in place to ensure supplier compliance with information security requirements, legal obligations, and industry standards?",
        policy: "21.9",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Is there a Business Continuity Plan (BCP) in place that adequately addresses the continuity of information security?",
        policy: "22.1",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Do incident response personnel possess the necessary responsibility, authority, and competence to manage incidents during business disruptions?",
        policy: "22.2",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Are documented plans and recovery procedures for disaster recovery approved and readily available?",
        policy: "22.3",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Is the effectiveness of BCP testing verified to ensure information security controls are operational during disaster recovery scenarios?",
        policy: "22.4",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Are there regular training programs for incident response personnel that are adequate and effective in managing security incidents during disruptions?",
        policy: "22.5",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Does your organization consider cyber insurance as part of its risk management strategy and is the coverage adequate in alignment with information security objectives?",
        policy: "22.6",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Are collaborative exercises conducted to validate and improve coordination and communication in Business Continuity and Disaster Recovery plans?",
        policy: "22.7",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Are continuous improvement mechanisms present in the Business Continuity and Disaster Recovery plans with regular reviews based on lessons learned?",
        policy: "22.8",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Are external dependencies, including third-party services, assessed and documented within the Business Continuity and Disaster Recovery plans?",
        policy: "22.9",
      },
      {
        policyDomain: "Mobile Device Management (MDM) Policy",
        assessmentCriteria:
          "Is Mobile Device Management (MDM) software mandated on all company-issued mobile devices?",
        policy: "23.1",
      },
      {
        policyDomain: "Mobile Device Management (MDM) Policy",
        assessmentCriteria:
          "Is device encryption enabled on all company-issued mobile devices to comply with industry standards and data protection regulations?",
        policy: "23.2",
      },
      {
        policyDomain: "Mobile Device Management (MDM) Policy",
        assessmentCriteria:
          "Are remote wipe capabilities enabled on all company-issued mobile devices to prevent unauthorized access in case of loss or theft?",
        policy: "23.3",
      },
      {
        policyDomain: "Mobile Device Management (MDM) Policy",
        assessmentCriteria:
          "Is there continuous monitoring of MDM software to ensure compliance with security policies on all company-issued mobile devices?",
        policy: "23.4",
      },
      {
        policyDomain: "Mobile Device Management (MDM) Policy",
        assessmentCriteria:
          "Is comprehensive training provided to employees on MDM policies and proper configuration and usage of MDM software on their devices?",
        policy: "23.5",
      },
      {
        policyDomain: "Mobile Device Management (MDM) Policy",
        assessmentCriteria:
          "Are regular audits and assessments conducted to monitor MDM configurations and device compliance?",
        policy: "23.6",
      },
      {
        policyDomain: "Mobile Device Management (MDM) Policy",
        assessmentCriteria:
          "Are MDM policies and procedures integrated with the organization’s incident response plan for coordinated security incident responses involving mobile devices?",
        policy: "23.7",
      },
      {
        policyDomain: "Mobile Device Management (MDM) Policy",
        assessmentCriteria:
          "Are procedures in place for timely updates and patches to MDM software to address vulnerabilities or security weaknesses?",
        policy: "23.8",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Does your payment gateway utilize strong encryption for all data, both at rest and in transit, using industry-standard protocols like TLS?",
        policy: "24.1",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Does your payment gateway comply with legal and regulatory standards such as PCI DSS?",
        policy: "24.2",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Are strict access controls and multi-factor authentication implemented for accessing payment gateway systems?",
        policy: "24.3",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Is there continuous monitoring and logging of all transactions processed through the payment gateway?",
        policy: "24.4",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Do you implement advanced fraud detection technologies to identify and prevent fraudulent transactions?",
        policy: "24.5",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Is data integrity maintained throughout the transaction process with mechanisms like data hashing and checksums?",
        policy: "24.6",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Is there a vendor management policy in place that covers security requirements and ongoing monitoring of third-party service providers interacting with the payment gateway?",
        policy: "24.7",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Are there established protocols for responding to security incidents within the payment gateway ecosystem?",
        policy: "24.8",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Do you have developed and maintained business continuity and disaster recovery plans for your payment gateway?",
        policy: "24.9",
      },
      {
        policyDomain: "Secure Payment",
        assessmentCriteria:
          "Is regular training and security awareness provided to all employees involved with the payment gateway?",
        policy: "24.10",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Do you adhere to data privacy laws and regulations through your Data Privacy Policy?",
        policy: "25.1",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Are there robust security controls in place to protect customer data from unauthorized access or breaches?",
        policy: "25.2",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Is there a defined policy for the retention and safe disposal of customer data when no longer needed?",
        policy: "25.3",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Do you implement access control measures to ensure customer data is only accessible to authorized personnel?",
        policy: "25.4",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Are there established procedures for responding to data breaches, including incident reporting and notifications?",
        policy: "25.5",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Is customer data encrypted during storage and transmission as per your Data Encryption Policy?",
        policy: "25.6",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Is there a policy managing risks associated with sharing customer data with third parties?",
        policy: "25.7",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Are all employees trained on data protection principles and secure handling of customer data?",
        policy: "25.8",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Do you regularly audit compliance with data protection policies and regulatory requirements?",
        policy: "25.9",
      },
      {
        policyDomain: "Protection of Customer Data",
        assessmentCriteria:
          "Do you ensure the accuracy and completeness of customer data throughout its lifecycle?",
        policy: "25.10",
      },
      {
        policyDomain: "VOIP Security",
        assessmentCriteria:
          "Is your VoIP traffic segmented from other network traffic using techniques like VLANs to enhance security?",
        policy: "26.1",
      },
      {
        policyDomain: "VOIP Security",
        assessmentCriteria:
          "Are strong encryption protocols used for all VoIP communications to secure data against eavesdropping and interception?",
        policy: "26.2",
      },
      {
        policyDomain: "VOIP Security",
        assessmentCriteria:
          "Are there rigorous access controls and authentication mechanisms in place for your VoIP systems?",
        policy: "26.3",
      },
      {
        policyDomain: "VOIP Security",
        assessmentCriteria:
          "Is antivirus and anti-malware protection up-to-date across all VoIP infrastructure components?",
        policy: "26.4",
      },
      {
        policyDomain: "VOIP Security",
        assessmentCriteria:
          "Are firewalls configured to protect VoIP systems by allowing legitimate traffic and blocking unauthorized access?",
        policy: "26.5",
      },
      {
        policyDomain: "VOIP Security",
        assessmentCriteria:
          "Are VoIP devices secured through device hardening, secure provisioning, and regular firmware updates?",
        policy: "26.6",
      },
      {
        policyDomain: "VOIP Security",
        assessmentCriteria:
          "Do you regularly update VoIP software and hardware components to protect against known vulnerabilities?",
        policy: "26.7",
      },
      {
        policyDomain: "VOIP Security",
        assessmentCriteria:
          "Is the physical security of VoIP infrastructure ensured through secure installation locations and access controls?",
        policy: "26.8",
      },
      {
        policyDomain: "VOIP Security",
        assessmentCriteria:
          "Do you have an incident response policy specifically for VoIP security incidents?",
        policy: "26.9",
      },
      {
        policyDomain: "VOIP Security",
        assessmentCriteria:
          "Are your VoIP deployments compliant with relevant legal and regulatory requirements?",
        policy: "26.10",
      },
      {
        policyDomain: "Internet of Things Policies",
        assessmentCriteria:
          "Does each IoT device implement device-specific authentication mechanisms such as unique identifiers or certificates?",
        policy: "27.1",
      },
      {
        policyDomain: "Internet of Things Policies",
        assessmentCriteria:
          "Is end-to-end encryption required for all data transmitted between IoT devices and backend systems?",
        policy: "27.2",
      },
      {
        policyDomain: "Internet of Things Policies",
        assessmentCriteria:
          "Do you verify the integrity of IoT device firmware during boot-up and runtime to prevent unauthorized modifications?",
        policy: "27.3",
      },
      {
        policyDomain: "Internet of Things Policies",
        assessmentCriteria:
          "Are IoT devices segmented into separate network zones or VLANs to isolate them from critical infrastructure?",
        policy: "27.4",
      },
      {
        policyDomain: "Internet of Things Policies",
        assessmentCriteria:
          "Are physical security measures like tamper-evident seals or intrusion detection sensors deployed on IoT devices?",
        policy: "27.5",
      },
      {
        policyDomain: "Internet of Things Policies",
        assessmentCriteria:
          "Do you obtain explicit user consent before collecting personal data through IoT devices?",
        policy: "27.6",
      },
      {
        policyDomain: "Internet of Things Policies",
        assessmentCriteria:
          "Have you developed incident response procedures specifically tailored for IoT environments?",
        policy: "27.7",
      },
      {
        policyDomain: "Internet of Things Policies",
        assessmentCriteria:
          "Do you assess the security posture of IoT device vendors and supply chain partners?",
        policy: "27.8",
      },
      {
        policyDomain: "Internet of Things Policies",
        assessmentCriteria:
          "Is there a secure onboarding process for IoT devices, including credential management and software updates?",
        policy: "27.9",
      },
      {
        policyDomain: "Internet of Things Policies",
        assessmentCriteria:
          "Do you provide specialized security training for IoT users and administrators?",
        policy: "27.10",
      },
      {
        policyDomain: "Machine Learning Policies",
        assessmentCriteria:
          "Do you have guidelines for collecting, storing, and managing data used for training ML models, ensuring data quality and compliance with privacy regulations?",
        policy: "28.1",
      },
      {
        policyDomain: "Machine Learning Policies",
        assessmentCriteria:
          "Are procedures in place for developing, testing, and validating ML models to ensure their accuracy, reliability, and fairness?",
        policy: "28.2",
      },
      {
        policyDomain: "Machine Learning Policies",
        assessmentCriteria:
          "Is there a protocol for deploying ML models into production environments with continuous monitoring for performance and security?",
        policy: "28.3",
      },
      {
        policyDomain: "Machine Learning Policies",
        assessmentCriteria:
          "Do you have guidelines for the ethical use of ML, addressing biases and ensuring fairness in outcomes?",
        policy: "28.4",
      },
      {
        policyDomain: "Machine Learning Policies",
        assessmentCriteria:
          "Are there security controls to protect ML systems and data from unauthorized access and breaches?",
        policy: "28.5",
      },
      {
        policyDomain: "Machine Learning Policies",
        assessmentCriteria:
          "Do you provide comprehensive training for employees involved in ML development on topics like data privacy and security?",
        policy: "28.6",
      },
      {
        policyDomain: "Machine Learning Policies",
        assessmentCriteria:
          "Do you assess and manage security and ethical risks associated with third-party ML solutions and service providers?",
        policy: "28.7",
      },
      {
        policyDomain: "Artificial Intelligence Policies",
        assessmentCriteria:
          "Do you adhere to established data governance guidelines that ensure data quality, privacy, and ethical standards for AI models?",
        policy: "29.1",
      },
      {
        policyDomain: "Artificial Intelligence Policies",
        assessmentCriteria:
          "Are your AI models developed, tested, and validated according to documented procedures that ensure their accuracy, reliability, and fairness?",
        policy: "29.2",
      },
      {
        policyDomain: "Artificial Intelligence Policies",
        assessmentCriteria:
          "Do you have effective protocols in place for deploying, monitoring, and routinely updating AI models in production environments?",
        policy: "29.3",
      },
      {
        policyDomain: "Artificial Intelligence Policies",
        assessmentCriteria:
          "Have you established guidelines and auditing processes to address and mitigate ethical risks and biases in AI applications?",
        policy: "29.4",
      },
      {
        policyDomain: "Artificial Intelligence Policies",
        assessmentCriteria:
          "Do you implement robust security controls and conduct regular audits to protect AI systems and data from unauthorized access and vulnerabilities?",
        policy: "29.5",
      },
      {
        policyDomain: "Artificial Intelligence Policies",
        assessmentCriteria:
          "Is there a comprehensive training and awareness program for employees involved in AI, covering data privacy, security, and ethical best practices?",
        policy: "29.6",
      },
      {
        policyDomain: "Artificial Intelligence Policies",
        assessmentCriteria:
          "Do you assess and manage security and ethical risks associated with third-party AI solutions and service providers, ensuring compliance with your standards?",
        policy: "29.7",
      },
    ],
  },
  {
    category: "Manufacturing Services",
    policyDomain: "Information and Cyber Security Governance",
    checklists: [
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Has the organization appointed an Information Security Officer (ISO) responsible for overseeing information and cyber security?",
        policy: "1.1",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are information and cyber security responsibilities clearly defined and assigned to the ISO?",
        policy: "1.2",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "In the absence of an ISO, has the bank assigned information and cyber security responsibilities to the Chief Information Officer (CIO) or another designated IT officer?",
        policy: "1.3",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Have information security audit responsibilities been assigned to the (Chief) Information Auditor (IA) to ensure regular and thorough assessments?",
        policy: "1.4",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Has a committee been established responsible for making decisions on information and cyber security matters?",
        policy: "1.5",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is there a separate committee dedicated to making decisions on information and cyber security risks?",
        policy: "1.6",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Have end-user responsibilities regarding information and cyber security been clearly communicated and explained?",
        policy: "1.7",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are proactive steps being taken to develop the information security capacity of accountable individuals through training and awareness programs?",
        policy: "1.8",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are background checks and security clearances being conducted for officials dealing with 'Secret' or 'Confidential' information assets or having access to Critical National Information Infrastructure (CNII)?",
        policy: "1.9",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is information security considered in the design and implementation of the organization’s functions, policies, strategies, or projects?",
        policy: "1.10",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Has the organization allocated financial provisions to support information security activities and initiatives?",
        policy: "1.11",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Have action plans been developed and implemented to achieve the organization's information security objectives, ensuring a systematic and measurable approach?",
        policy: "1.12",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Is the organization systematically identifying information assets that hold value to the manufacturing processes or business operations?",
        policy: "2.1",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Have risk assessments been conducted to evaluate and quantify the risks associated with identified information assets in the manufacturing environment?",
        policy: "2.2",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Is there a process in place to periodically reassess the value of information assets to ensure they align with manufacturing priorities and changes?",
        policy: "2.3",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are risk assessments associated with information assets regularly reassessed and updated to address evolving threats and vulnerabilities in the manufacturing context?",
        policy: "2.4",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Have information assets been classified based on sensitivity or other relevant criteria to establish appropriate protective measures within manufacturing operations?",
        policy: "2.5",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Is there an IT Assets Register maintained to record and track all IT assets utilized within the manufacturing organization?",
        policy: "2.6",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Have IT assets been classified based on their criticality to manufacturing operations and the overall security posture of the organization?",
        policy: "2.7",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          " Are owners clearly identified and designated for each information and IT asset within the manufacturing environment to ensure accountability and responsibility for their security and maintenance?",
        policy: "2.8",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are we ensuring compliance with data sovereignty regulations and policies in the processing and storage of information within our manufacturing operations?",
        policy: "3.1",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Before obtaining cloud services, are we conducting a thorough risk assessment to mitigate potential security risks within our manufacturing processes?",
        policy: "3.2",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Do we ensure that all operating systems used within our manufacturing organization have valid licenses?",
        policy: "3.3",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are organization operating systems regularly updated with the latest patches and fixes supplied by the vendor within our manufacturing environment?",
        policy: "3.4",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Have we established procedures to ensure the timely installation of critical patches supplied by vendors within our manufacturing processes?",
        policy: "3.5",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Have we installed antimalware software with valid licenses on all machines to protect against malicious software within our manufacturing operations?",
        policy: "3.6",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are users restricted from using personal emails for official communications to prevent security risks within our manufacturing environment?",
        policy: "3.7",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Have we set up email filters to detect and remove emails known to have malware attached within our manufacturing operations?",
        policy: "3.8",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are we utilizing encryption when sending sensitive information via email to maintain confidentiality within our manufacturing processes?",
        policy: "3.9",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Have we deployed firewalls within the computer network to control and monitor incoming and outgoing network traffic within our manufacturing operations?",
        policy: "3.10",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are we using secure Virtual Private Networks (VPNs) for remote access to ensure secure communication within our manufacturing environment?",
        policy: "3.11",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Do we ensure that all users connecting remotely use VPN to maintain a secure connection within our manufacturing operations?",
        policy: "3.12",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Have we established and adhered to procedures for regularly backing up data to prevent data loss within our manufacturing processes?",
        policy: "3.13",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are backups stored at a fireproof, secure location physically distant from the data processing site within our manufacturing environment?",
        policy: "3.14",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are we following secure methods (e.g., shredding, punching, physically damaging, degaussing) for disposing of electronic media containing sensitive information within our manufacturing operations?",
        policy: "3.15",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Have we implemented an internal information security audit program to regularly assess and enhance security measures within our manufacturing operations?",
        policy: "3.16",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Prior to any software application deployment, are we conducting Vulnerability Assessments and Penetration Testing (VAPTs) through Sri Lanka CERT within our manufacturing processes?",
        policy: "3.17",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are we performing regular Vulnerability Assessments and Penetration Testing (VAPT) for the computer network within our manufacturing environment?",
        policy: "3.18",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are we adhering to work-from-home guidelines issued by Sri Lanka CERT to ensure a secure remote working environment for our manufacturing staff?",
        policy: "3.19",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Have we established a formal procedure for registering personal devices used within the organization to maintain security standards within our manufacturing operations?",
        policy: "3.20",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are personal devices prohibited from processing or storing critical data within our manufacturing environment to prevent security risks?",
        policy: "3.21",
      },
      {
        policyDomain: "Detection of Information Security Incidents",
        assessmentCriteria:
          "Are all staff members instructed to promptly report any suspicious activity, contact, theft, virus, vulnerability, unauthorized access, tampering with files, or violation of security policy to the designated person in charge of Information Security within our manufacturing operations?",
        policy: "4.1",
      },
      {
        policyDomain: "Detection of Information Security Incidents",
        assessmentCriteria:
          "Are we required to report cyber security incidents promptly to Sri Lanka CERT or any other relevant party as per established reporting procedures within our manufacturing processes?",
        policy: "4.2",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "Has the organization developed and maintained an Incident Response Plan outlining procedures to be followed in the event of information and cyber security incidents within our manufacturing operations?",
        policy: "5.1",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "In the event of an information and cyber security incident, is the Incident Response Plan promptly activated to minimize the impact on our manufacturing operations and restore normalcy?",
        policy: "5.2",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "Has the organization developed a comprehensive Disaster Recovery Plan to facilitate the recovery process in the event of a disaster or disruptive event within our manufacturing environment?",
        policy: "5.3",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "In the event of a disaster or any significant disruptive event, is the Disaster Recovery Plan promptly activated to restore disrupted services and ensure continuity of critical operations within our manufacturing operations?",
        policy: "5.4",
      },
      {
        policyDomain: "Bring Your Own Device",
        assessmentCriteria:
          "Have we clearly defined acceptable use guidelines for personal devices used for work purposes within our manufacturing operations, outlining acceptable and prohibited activities, applications, and data handling practices?",
        policy: "6.1",
      },
      {
        policyDomain: "Bring Your Own Device",
        assessmentCriteria:
          "Are robust security measures required on all BYOD devices within our manufacturing environment, including password protection, encryption of sensitive data, and regular installation of security updates and patches?",
        policy: "6.2",
      },
      {
        policyDomain: "Bring Your Own Device",
        assessmentCriteria:
          "Have we established a streamlined process for employees to promptly report lost or stolen BYOD devices to the IT department or designated authority within our manufacturing organization?",
        policy: "6.3",
      },
      {
        policyDomain: "Bring Your Own Device",
        assessmentCriteria:
          "Is there a mandatory registration and enrollment process for BYOD devices accessing company resources within our manufacturing operations, including the installation of necessary security software and configuration of security settings?",
        policy: "6.4",
      },
      {
        policyDomain: "Bring Your Own Device",
        assessmentCriteria:
          "Are we utilizing Mobile Device Management (MDM) or similar solutions to enable remote management and monitoring of BYOD devices within our manufacturing environment, allowing for the enforcement of security policies and remote data wipes?",
        policy: "6.5",
      },
      {
        policyDomain: "Bring Your Own Device",
        assessmentCriteria:
          "Are employees encouraged to use containerization or segregated workspaces on BYOD devices to separate personal and work-related data within our manufacturing operations, ensuring the security and integrity of company information?",
        policy: "6.6",
      },
      {
        policyDomain: "Bring Your Own Device",
        assessmentCriteria:
          "Are employees using BYOD devices provided with ongoing security awareness training within our manufacturing organization, covering topics such as phishing awareness, safe browsing habits, and adherence to BYOD security policies?",
        policy: "6.7",
      },
      {
        policyDomain: "Bring Your Own Device",
        assessmentCriteria:
          "Are regular security assessments and audits conducted on BYOD devices and their associated security controls within our manufacturing operations to identify and address any vulnerabilities or compliance issues?",
        policy: "6.8",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Does each user within the organization have a unique identifier and utilize strong authentication mechanisms to verify their identity, as required by the Identification and Authentication Policy?",
        policy: "7.1",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Does the Authorization Policy define and enforce the rules and conditions under which users are granted or denied access to resources, emphasizing least privilege and separation of duties?",
        policy: "7.2",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Are there established procedures for granting access to new users and revoking access when it is no longer needed or when users leave the organization, as outlined in the Access Provisioning and De-provisioning Policy?",
        policy: "7.3",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Is there a mandate for periodic reviews and revalidations of user access rights to ensure they remain appropriate and secure, as specified in the User Access Review and Revalidation Policy?",
        policy: "7.4",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Does the Physical Access Control Policy effectively control physical entry to secure areas within the organization to prevent unauthorized access?",
        policy: "7.5",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Does the Remote Access Policy regulate remote access to organizational resources, ensuring it is secure and only through approved methods and devices?",
        policy: "7.6",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Are security incidents required to be reported immediately, and are there outlined procedures for addressing access control violations, as stated in the Incident Response and Reporting Policy?",
        policy: "7.7",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Does the Training and Awareness Policy provide ongoing education on access control policies and promote security awareness among all users?",
        policy: "7.8",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Do the Compliance and Enforcement measures ensure that access control policies comply with legal and regulatory requirements and establish penalties for violations?",
        policy: "7.9",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Has the organization reviewed the establishment of a formal IT governance framework within our manufacturing operations, assessing roles, responsibilities, and decision-making processes for IT security stakeholders?",
        policy: "8.1",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Have we evaluated the appointment of a senior management representative responsible for overseeing Information Security implementation and maintenance within our manufacturing environment?",
        policy: "8.2",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are regular risk assessments conducted to identify and prioritize IT security risks within our manufacturing processes, guiding the development of security controls?",
        policy: "8.3",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Has the organization implemented a continuous improvement process for Information Security within our manufacturing operations, ensuring periodic assessments align with changes in the organization's IT environment and risk profile?",
        policy: "8.4",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are roles and responsibilities for IT security personnel clearly defined within our manufacturing organization, covering the development, implementation, and maintenance of security controls?",
        policy: "8.5",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are necessary training and resources provided for IT security personnel within our manufacturing operations, including Information Security training and access to required tools and technologies?",
        policy: "8.6",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are IT security personnel within our manufacturing organization aware of the organization's IT security policies and procedures, facilitating informed decision-making for IT asset protection?",
        policy: "8.7",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Has the organization established a process for reporting and investigating IT security incidents within our manufacturing environment, ensuring prompt identification, investigation, and remediation?",
        policy: "8.8",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is there a continuous monitoring program in place within our manufacturing operations to assess ongoing compliance with IT security policies, standards, and regulatory requirements?",
        policy: "8.9",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Has the organization established and enforced strong password policies within our manufacturing operations?",
        policy: "9.1",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Do our password policies include requirements such as length, complexity, and expiration within our manufacturing environment?",
        policy: "9.2",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is multi-factor authentication (MFA) implemented for required sensitive systems and data within our manufacturing processes?",
        policy: "9.3",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "What is the frequency and appropriateness of password change requirements within our manufacturing organization?",
        policy: "9.4",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Do password complexity requirements within our manufacturing environment align with industry best practices?",
        policy: "9.5",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are user awareness programs provided on password security within our manufacturing operations?",
        policy: "9.6",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Do our password management practices align with relevant regulatory requirements within our manufacturing environment?",
        policy: "9.7",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are stored passwords encrypted or masked in the databases within our manufacturing organization?",
        policy: "9.8",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Does the organization implement adaptive authentication mechanisms that dynamically adjust security controls based on risk assessments and user behavior within our manufacturing processes?",
        policy: "9.9",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is there a well-defined and secure process for users to recover or reset their passwords within our manufacturing operations, ensuring both security and user convenience?",
        policy: "9.10",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Does the organization employ monitoring and anomaly detection tools to identify suspicious or abnormal password-related activities within our manufacturing environment?",
        policy: "9.11",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are there periodic security awareness training sessions specifically focused on password security for all users within our manufacturing organization?",
        policy: "9.12",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is there a defined process for handling exceptions to the standard password policies, and is it consistently applied within our manufacturing operations?",
        policy: "9.13",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is there integration between the password management system and the broader Identity and Access Management (IAM) framework within our manufacturing organization?",
        policy: "9.14",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Has the organization implemented a policy for backup management within our manufacturing operations?",
        policy: "10.1",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "How is the performance of backup restoration testing evaluated within our manufacturing environment?",
        policy: "10.2",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are backups stored in a remote location and logged when sent within our manufacturing organization?",
        policy: "10.3",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "How often are automated backups reviewed, especially for sensitive data, within our manufacturing processes?",
        policy: "10.4",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "How is the protection of recovery data ensured, such as through encryption or data separation, within our manufacturing operations?",
        policy: "10.5",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is there maintenance of an isolated instance of recovery data using version control within our manufacturing environment?",
        policy: "10.6",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is there a documented backup retention policy specifying the duration backups are retained, and are these policies consistently applied across different data types within our manufacturing organization?",
        policy: "10.7",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Does the organization leverage cloud-based backup solutions within our manufacturing operations, and if so, are these solutions compliant with security and privacy standards?",
        policy: "10.8",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is there integration between the backup and incident response plans within our manufacturing organization to ensure timely restoration in the event of a security incident or data loss?",
        policy: "10.9",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are there monitoring tools in place to track the status of backup processes within our manufacturing environment, and are alerts configured to notify relevant personnel in case of backup failures or anomalies?",
        policy: "10.10",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are backups configured in an immutable state within our manufacturing operations, preventing unauthorized modifications or deletions?",
        policy: "10.11",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is there a versioning system in place for backups within our manufacturing organization, facilitating the retrieval of specific data versions when needed?",
        policy: "10.12",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Does the organization conduct continuous testing of backup and recovery processes within our manufacturing environment to ensure resilience against evolving threats and changes in the IT environment?",
        policy: "10.13",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Are Vulnerability Assessments and Penetration Tests (VAPT) conducted within our manufacturing operations?",
        policy: "11.1",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Are records of vulnerabilities and VAPTs maintained within our manufacturing environment?",
        policy: "11.2",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is an authorized end-user software list available within our manufacturing organization?",
        policy: "11.3",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is VAPT performed periodically within our manufacturing processes?",
        policy: "11.4",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Has the organization taken necessary actions to address VAPT findings within our manufacturing environment?",
        policy: "11.5",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "How effective is the vulnerability assessment process within our manufacturing operations in identifying and prioritizing potential security risks?",
        policy: "11.6",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is there a patch management process in place within our manufacturing organization to address vulnerabilities promptly after identification?",
        policy: "11.7",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "How is vulnerability management integrated with configuration management processes within our manufacturing environment to ensure consistency and accuracy in identifying vulnerabilities?",
        policy: "11.8",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Does the organization collaborate with external sources to stay informed about emerging vulnerabilities relevant to its manufacturing environment?",
        policy: "11.9",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Are there metrics and reporting mechanisms in place for tracking the success of vulnerability management efforts within our manufacturing operations?",
        policy: "11.10",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is there a documented timeline for remediating identified vulnerabilities within our manufacturing organization, and is it consistently adhered to?",
        policy: "11.11",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Does the vulnerability management process within our manufacturing environment consider asset criticality when prioritizing remediation efforts?",
        policy: "11.12",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Does the organization employ continuous monitoring mechanisms within our manufacturing operations to identify and assess new vulnerabilities in a timely manner?",
        policy: "11.13",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Has the organization implemented a formalized procedure for identifying, documenting, and approving all changes?",
        policy: "12.1",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Do changes undergo meticulous planning and testing prior to implementation?",
        policy: "12.2",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is there a specific approach implemented for evaluating the impact of changes?",
        policy: "12.3",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are thorough risk assessments conducted as a result of organizational changes?",
        policy: "12.4",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are measures implemented to effectively mitigate identified risks?",
        policy: "12.5",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are security controls reviewed and tested after changes are made?",
        policy: "12.6",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is post-implementation testing, security controls testing, and security audits performed to validate the effectiveness of changes?",
        policy: "12.7",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is the effective communication of change details ensured to all relevant parties?",
        policy: "12.8",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is there a process in place to document changes comprehensively and facilitate knowledge transfer to relevant personnel, ensuring continuity in case of staff changes or transitions?",
        policy: "12.9",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Does the organization have a well-defined plan for rolling back changes in the event of unexpected issues, and is it tested periodically to ensure its effectiveness?",
        policy: "12.10",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Does the organization leverage automated tools for change management to streamline the change request, approval, and tracking processes?",
        policy: "12.11",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are there established metrics to measure the performance and effectiveness of the change management process, and are they regularly reviewed for continuous improvement?",
        policy: "12.12",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is the documentation related to changes easily accessible to authorized personnel, and is there a secure repository for change records?",
        policy: "12.13",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Has the organization implemented a secure development environment within our manufacturing operations?",
        policy: "13.1",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "How is the maintenance of the secure development process ensured within our manufacturing environment?",
        policy: "13.2",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are development environments segregated within our manufacturing processes?",
        policy: "13.3",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are access controls implemented to prevent unauthorized access to critical development environments within our manufacturing organization?",
        policy: "13.4",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are secure coding standards utilized, and are regular code reviews conducted to identify and rectify potential vulnerabilities within our manufacturing operations?",
        policy: "13.5",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Is application penetration testing conducted within our manufacturing environment?",
        policy: "13.6",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are developers provided training in application security concepts and secure coding practices within our manufacturing organization?",
        policy: "13.7",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Is there a clear separation between production and non-production systems within our manufacturing processes?",
        policy: "13.8",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are standard hardening configuration templates used for application infrastructure within our manufacturing operations?",
        policy: "13.9",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are up-to-date and trusted third-party software components used within our manufacturing environment?",
        policy: "13.10",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Do the policies within our manufacturing organization address a secure environment, including security in the development lifecycle, security checkpoints to milestones, secure repository, etc.?",
        policy: "13.11",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are DevSecOps principles integrated into the software development lifecycle within our manufacturing processes to ensure continuous security?",
        policy: "13.12",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Are there specific guidelines and controls in place for secure API development, including authentication, authorization, and data protection within our manufacturing environment?",
        policy: "13.13",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Is there integration between software development processes and incident response plans to facilitate a rapid response in case of security incidents within our manufacturing organization?",
        policy: "13.14",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Is threat modeling employed during the design phase to identify and mitigate potential security threats and vulnerabilities within our manufacturing operations?",
        policy: "13.15",
      },
      {
        policyDomain: "Software Development Security",
        assessmentCriteria:
          "Do developers receive ongoing and up-to-date security training within our manufacturing organization to stay abreast of the latest threats and best practices?",
        policy: "13.16",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Does our organization maintain an up-to-date inventory of all hardware and software assets used in our manufacturing operations?",
        policy: "14.1",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "How do we ensure the accuracy and completeness of our inventory, including critical details such as version numbers and dependencies?",
        policy: "14.2",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "What processes do we have in place to prioritize patches based on the criticality of vulnerabilities and potential business impact within our manufacturing environment?",
        policy: "14.3",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Do we maintain a testing environment that mirrors our production environment for validating patches before deployment in our manufacturing systems?",
        policy: "14.4",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is there a streamlined process for applying critical patches in emergency situations within our manufacturing operations?",
        policy: "14.5",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Have we implemented automated tools for deploying patches across our manufacturing systems?",
        policy: "14.6",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "How do we maintain detailed records of applied patches, including dates, versions, and any encountered issues within our manufacturing environment?",
        policy: "14.7",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is there integration between our patch management process and the change management system to ensure coordination and communication between teams in our manufacturing organization?",
        policy: "14.8",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "How effectively do we communicate with vendors to stay informed about upcoming patches, known vulnerabilities, and recommended mitigation strategies relevant to our manufacturing systems?",
        policy: "14.9",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Do we have a documented plan for rolling back patches in the event of unexpected issues within our manufacturing operations, and is it periodically tested for effectiveness?",
        policy: "14.10",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "What reporting and metrics do we utilize to track patch management effectiveness and compliance with patching timelines in our manufacturing environment?",
        policy: "14.11",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "How is the patch management process integrated with our endpoint security solutions to ensure comprehensive coverage and visibility into the patch status of endpoints across our manufacturing systems?",
        policy: "14.12",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are access control mechanisms in place on doors within our manufacturing facilities, and is access logging implemented to track entry and exit?",
        policy: "15.1",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "How do we restrict entry to sensitive zones within our manufacturing facilities, and are security cameras deployed for added surveillance?",
        policy: "15.2",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "How do we evaluate our equipment against hazards such as fire, flood, and earthquakes, and do we maintain and test controls regularly to ensure resilience?",
        policy: "15.3",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "How do we restrict access to our data centers within the manufacturing facilities, and are measures in place to block unauthorized devices by users?",
        policy: "15.4",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "What measures do we have in place to limit access to manufacturing areas, including the employment of guards, monitoring with CCTV, and registration and inspection of incoming items?",
        policy: "15.5",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "What security controls are implemented in our server rooms to restrict access and ensure monitoring within our manufacturing facilities?",
        policy: "15.6",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Do we employ biometric access controls for sensitive areas within our manufacturing facilities to provide an additional layer of identity verification?",
        policy: "15.7",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "How do we detect physical intrusions within our manufacturing facilities, such as through the use of motion sensors or alarms?",
        policy: "15.8",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "How regularly are environmental controls (e.g., fire suppression systems, temperature controls) tested for effectiveness and reliability within our manufacturing facilities?",
        policy: "15.9",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "What procedures do we follow for the secure disposal of sensitive materials and equipment within our manufacturing operations, ensuring compliance with data protection and environmental regulations?",
        policy: "15.10",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Do we have a comprehensive emergency response plan for physical security incidents within our manufacturing facilities, including procedures for handling natural disasters or security breaches?",
        policy: "15.11",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Does our organization have a documented policy for comprehensive event logging, including explicit definitions of event types relevant to our manufacturing operations?",
        policy: "16.1",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Do we maintain a comprehensive inventory covering all systems, applications, and network components generating log events within our manufacturing environment?",
        policy: "16.2",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Are administrator and operator activities systematically logged within our manufacturing operations, and are regular reviews conducted to detect unauthorized or suspicious actions?",
        policy: "16.3",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "What is our organization's practice regarding the retention period for event logs within our manufacturing facilities?",
        policy: "16.4",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "How do we implement real-time log generation, continuous monitoring, and automatic alert mechanisms during critical events within our manufacturing operations?",
        policy: "16.5",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "What procedures do we follow for regularly backing up logs, protecting them from unauthorized access, and ensuring compliance with encryption standards within our manufacturing environment?",
        policy: "16.6",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Do we adhere to a policy for clock synchronization across critical systems and applications within our manufacturing facilities, including documented time sources and regular testing mechanisms?",
        policy: "16.7",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "How do we verify the integrity of logs within our manufacturing operations to ensure they have not been tampered with or altered in any unauthorized manner?",
        policy: "16.8",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Are user activities, especially interactions with sensitive data and critical systems, logged within our manufacturing environment?",
        policy: "16.9",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "How often do we review and update our log retention policy to align with changing regulatory requirements and the evolving needs of our manufacturing operations?",
        policy: "16.10",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Do we integrate logs with a Security Information and Event Management (SIEM) system for centralized log analysis and correlation within our manufacturing facilities?",
        policy: "16.11",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Do personnel responsible for log analysis receive regular training to enhance their skills in identifying patterns, anomalies, and potential security incidents from log data within our manufacturing operations?",
        policy: "16.12",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "How thoroughly have network controls, such as VLANs, been implemented within our manufacturing infrastructure to safeguard information systems?",
        policy: "17.1",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "What measures are in place to restrict connections to our manufacturing network, enhancing overall security?",
        policy: "17.2",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "How are our public-facing networks protected to ensure robust security measures against potential cyber threats?",
        policy: "17.3",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Have we clearly defined and established monitoring protocols for network-related service levels within our manufacturing environment?",
        policy: "17.4",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "How effectively do we practice defining and monitoring network-related service levels to ensure optimal performance and security?",
        policy: "17.5",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "To what extent have Network Access Control (NAC) mechanisms been implemented to manage and restrict access based on device health and user identity within our manufacturing network?",
        policy: "17.6",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Have we deployed Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) to effectively detect and respond to network threats in our manufacturing environment?",
        policy: "17.7",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "How extensively have we implemented network segmentation to isolate critical assets and prevent lateral movement in case of a security breach within our manufacturing infrastructure?",
        policy: "17.8",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "What capabilities do we have for continuous network monitoring to promptly identify and respond to any anomalous activities occurring within our manufacturing network?",
        policy: "17.9",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "How thoroughly are monitoring and capacity projections conducted for all hardware resources, utilities, software, and personnel within our manufacturing operations?",
        policy: "18.1",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Have we adequately identified the capacity requirements for all systems in our manufacturing environment, considering their respective business criticality?",
        policy: "18.2",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Are continuous monitoring and tuning activities consistently performed to maintain the required performance of our manufacturing systems and resources?",
        policy: "18.3",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Do we have effective detective controls in place to promptly indicate any issues or problems that may arise within our manufacturing processes?",
        policy: "18.4",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "How robust are our processes for assessing scalability, ensuring that our manufacturing systems can handle increased loads and demands effectively?",
        policy: "18.5",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Have we conducted a thorough business impact analysis related to capacity management, identifying potential impacts on critical manufacturing processes?",
        policy: "18.6",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "What strategies do we have in place for optimizing the usage of resources within our manufacturing operations, including dynamic allocation and de-allocation based on demand?",
        policy: "18.7",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Do we have comprehensive and regularly updated documentation covering capacity planning for hardware, software, and personnel within our manufacturing environment?",
        policy: "18.8",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Does our organization have comprehensive incident response procedures covering planning, preparation, and logging activities within our manufacturing operations?",
        policy: "19.1",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "How effective are our procedures for monitoring, detecting, analyzing, and reporting information security events and incidents within our manufacturing environment?",
        policy: "19.2",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Are the individuals responsible for handling incidents within our manufacturing operations adequately trained and equipped with the necessary skills?",
        policy: "19.3",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Do we conduct Root Cause Analysis (RCA) for incidents within our manufacturing processes to determine corrective and preventive actions, with lessons learned communicated to relevant parties?",
        policy: "19.4",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Have we established clear guidelines for incident classification and prioritization to ensure a systematic approach to incident response within our manufacturing operations?",
        policy: "19.5",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "Are there mechanisms in place within our incident response procedures for continuous improvement, including regular reviews and updates based on lessons learned and emerging threats in the manufacturing sector?",
        policy: "19.6",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "How effectively do different teams collaborate during incident response within our manufacturing organization to ensure communication and coordination?",
        policy: "19.7",
      },
      {
        policyDomain: "Incident Management",
        assessmentCriteria:
          "To what extent do we utilize automated incident response tools within our manufacturing operations to enhance the efficiency and speed of incident detection, containment, and remediation?",
        policy: "19.8",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Has our organization implemented a comprehensive supplier and vendor management policy within our manufacturing operations, outlining key processes and responsibilities?",
        policy: "20.1",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "How actively do we monitor our suppliers within the manufacturing supply chain to identify and address potential risks in a timely manner?",
        policy: "20.2",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Have we established clear Service Level Agreements (SLA) and Non-Disclosure Agreements (NDA) with our suppliers, ensuring alignment with our information security objectives?",
        policy: "20.3",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Do our supplier agreements include information security requirements such as incident handling processes, screening requirements, and adherence to industry best practices?",
        policy: "20.4",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "How effectively are information security requirements, monitoring processes, and rules for sharing information incorporated into our supplier agreements to enhance security collaboration?",
        policy: "20.5",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Have we defined and implemented minimum information security requirements based on required access levels within our supplier agreements, ensuring alignment with our organizational security policies?",
        policy: "20.6",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "Have we conducted third-party security assessments to evaluate the resilience and information security posture of key suppliers within our manufacturing supply chain?",
        policy: "20.7",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "What mechanisms do we have in place for continuous improvement in supplier security within our manufacturing operations, including regular reviews, feedback mechanisms, and collaborative initiatives?",
        policy: "20.8",
      },
      {
        policyDomain: "Supplier and Vendor Management",
        assessmentCriteria:
          "How effectively do we ensure supplier compliance with information security requirements, legal obligations, and industry standards within our manufacturing supply chain?",
        policy: "20.9",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Has our manufacturing organization implemented a Business Continuity Plan (BCP) that adequately addresses the continuity of information security, including data protection and incident response?",
        policy: "21.1",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Have we evaluated our incident response personnel to ensure they possess the necessary responsibility, authority, and competence to effectively manage incidents during business disruptions?",
        policy: "21.2",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Have we reviewed and approved documented plans and recovery procedures for our manufacturing operations, ensuring their availability and alignment with information security requirements?",
        policy: "21.3",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "How often do we evaluate BCP testing for our manufacturing operations, and how do we verify the effectiveness of information security controls during simulated disaster recovery scenarios?",
        policy: "21.4",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Are our regular training programs for incident response personnel sufficient and effective in preparing them to respond to security incidents during disruptions in our manufacturing operations?",
        policy: "21.5",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Does our manufacturing organization consider cyber insurance (First-party/Third-party) as part of its risk management strategy, and have we assessed the coverage adequacy and alignment with our information security objectives?",
        policy: "21.6",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Do we conduct collaborative exercises with relevant stakeholders to validate and improve the coordination and communication aspects of our Business Continuity and Disaster Recovery plans within our manufacturing operations?",
        policy: "21.7",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "What mechanisms do we have in place within our manufacturing organization for continuous improvement of our Business Continuity and Disaster Recovery plans, including regular reviews and updates based on lessons learned and emerging threats?",
        policy: "21.8",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Have we assessed and documented our manufacturing organization's external dependencies, including third-party services, and incorporated them into our Business Continuity and Disaster Recovery plans?",
        policy: "21.9",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Does the organization have a Data Privacy Policy that establishes guidelines for the collection, use, and protection of personal information, ensuring compliance with data protection laws?",
        policy: "22.1",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Is there a Data Security Policy that implements security controls to protect data from unauthorized access, use, disclosure, disruption, modification, or destruction, including encryption, access controls, and secure data storage and transmission protocols?",
        policy: "22.2",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Does the organization have a Data Retention and Disposal Policy that outlines the timeframes for retaining customer data and the procedures for its safe disposal when no longer needed?",
        policy: "22.3",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Is there an Access Control Policy that controls access to customer data, ensuring it is accessible only to those who require it to perform their duties, utilizing least privilege and separation of duties principles?",
        policy: "22.4",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Does the Incident Response and Breach Notification Policy detail the procedures for responding to data breaches and security incidents, including incident detection, management, recovery, and the notification process for affected individuals and regulatory bodies?",
        policy: "22.5",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Is customer data encrypted during storage and transmission as stated in the Data Encryption Policy, and are the encryption standards and protocols clearly defined?",
        policy: "22.6",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Is there a Third-Party Data Sharing and Processing Policy that manages risks associated with sharing customer data with third-party service providers and business partners?",
        policy: "22.7",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Does the Employee Data Protection Training Policy ensure that all employees understand their responsibilities related to protecting customer data, requiring regular training on data protection principles, security practices, and the consequences of data breaches?",
        policy: "22.8",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Does the organization ensure ongoing compliance with internal policies and external regulatory requirements related to data protection through an Audit and Compliance Policy, defining the frequency and scope of audits and the responsibilities for conducting them?",
        policy: "22.9",
      },
      {
        policyDomain: "Protection of Customer data",
        assessmentCriteria:
          "Is the accuracy and completeness of customer data maintained throughout its lifecycle, as stated in the Data Integrity Policy, including measures to validate data integrity, update procedures, and mechanisms to detect and correct inaccuracies?",
        policy: "22.10",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Does the organization mandate regular security awareness training for all employees, conducted at hire and at least annually thereafter, to familiarize them with the company’s security practices, potential threats, and appropriate responses to security incidents?",
        policy: "23.1",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Are employees receiving training specific to their roles, particularly for positions that handle sensitive information, critical infrastructure, or special equipment, to address the unique risks associated with specific job functions?",
        policy: "23.2",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Is training on regulatory and legal compliance required for employees, tailored to their specific duties, and covering industry-specific regulations such as HIPAA for healthcare, PCI DSS for payment processing, or GDPR for data protection?",
        policy: "23.3",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Does the organization provide specialized training on recognizing and responding to phishing attempts and other social engineering attacks, including regular simulation exercises?",
        policy: "23.4",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Are employees trained about the importance of data privacy and protection, including data classification, secure data handling procedures, and the legal implications of breaches?",
        policy: "23.5",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Are employees educated on physical security protocols such as securing workspaces, proper badge usage, visitor management, and reporting suspicious activities?",
        policy: "23.6",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Are employees instructed on cybersecurity best practices, including the use of strong passwords, the importance of regular software updates, secure browsing habits, and the secure use of mobile devices?",
        policy: "23.7",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Are employees trained on how to respond in the event of an emergency, including fires, natural disasters, or other crises, covering evacuation procedures and the use of emergency equipment?",
        policy: "23.8",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Does the organization encourage ongoing learning and skill development for employees, offering opportunities for further education, attending workshops, and accessing new training materials?",
        policy: "23.9",
      },
      {
        policyDomain: "Training and Awareness",
        assessmentCriteria:
          "Are mechanisms established for obtaining feedback on the effectiveness of training programs and for assessing the knowledge retention of participants, and is this feedback used to improve future training sessions?",
        policy: "23.10",
      },
      {
        policyDomain: "Internet of Things Policy",
        assessmentCriteria:
          "Does the organization implement device-specific authentication mechanisms such as unique device identifiers, certificates, or biometric authentication to ensure that only authorized IoT devices can communicate with each other or access network resources?",
        policy: "24.1",
      },
      {
        policyDomain: "Internet of Things Policy",
        assessmentCriteria:
          "Is end-to-end encryption required for data transmitted between IoT devices and backend systems, and is sensitive data stored on IoT devices encrypted using strong encryption algorithms?",
        policy: "24.2",
      },
      {
        policyDomain: "Internet of Things Policy",
        assessmentCriteria:
          "Is the integrity of IoT device firmware verified during boot-up and runtime, and are secure channels established for delivering firmware updates and patches, ensuring authenticity and integrity through code signing and secure boot mechanisms?",
        policy: "24.3",
      },
      {
        policyDomain: "Internet of Things Policy",
        assessmentCriteria:
          "Are IoT devices segmented into separate network zones or VLANs to isolate them from critical infrastructure, and are network access controls implemented to enforce communication policies and traffic filtering based on device types and intended communication patterns?",
        policy: "24.4",
      },
      {
        policyDomain: "Internet of Things Policy",
        assessmentCriteria:
          "Are physical security measures such as tamper-evident seals, enclosures with intrusion detection sensors, or secure mounting deployed to prevent unauthorized physical access to IoT devices, and are devices configured to detect and alert administrators of physical tampering or unauthorized attempts to access components?",
        policy: "24.5",
      },
      {
        policyDomain: "Internet of Things Policy",
        assessmentCriteria:
          "Is explicit consent obtained from users before collecting personal or sensitive data through IoT devices, and are data collection practices transparently disclosed, with data minimization and anonymization or pseudonymization implemented wherever possible?",
        policy: "24.6",
      },
      {
        policyDomain: "Internet of Things Policy",
        assessmentCriteria:
          "Are incident response procedures tailored to IoT environments developed, including methods for identifying, isolating, and containing compromised devices or networks, and are protocols in place for collecting and preserving digital evidence from IoT devices in case of security incidents or data breaches?",
        policy: "24.7",
      },
      {
        policyDomain: "Internet of Things Policy",
        assessmentCriteria:
          "Is the security posture of IoT device vendors and supply chain partners assessed, including transparency into their supply chain practices such as component sourcing, firmware validation, and vulnerability management, to mitigate supply chain risks and ensure device integrity?",
        policy: "24.8",
      },
      {
        policyDomain: "Internet of Things Policy",
        assessmentCriteria:
          "Are secure provisioning and onboarding processes implemented for IoT devices, including initial configuration, credential management, and software updates, and are procedures defined for securely decommissioning and disposing of end-of-life IoT devices in compliance with environmental regulations and data protection requirements?",
        policy: "24.9",
      },
      {
        policyDomain: "Internet of Things Policy",
        assessmentCriteria:
          "Are specialized training and awareness programs provided for IoT users, administrators, and developers focusing on IoT-specific security risks, best practices, and incident response procedures, and is collaboration fostered between IT security teams and IoT stakeholders to promote a culture of security awareness and continuous improvement in IoT security posture?",
        policy: "24.10",
      },
    ],
  },
  {
    category: "Government Organizations",
    policyDomain: "Information and Cyber Security Governance",
    checklists: [
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Have you appointed an Information Security Officer (ISO) to oversee information and cyber security?",
        policy: "1.1",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Have you clearly defined and assigned information and cyber security responsibilities to the ISO?",
        policy: "1.2",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "In the absence of an ISO, have you assigned these responsibilities to the Chief Information Officer (CIO) or another designated IT officer?",
        policy: "1.3",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are information security audit responsibilities assigned to the Chief Information Auditor (IA)?",
        policy: "1.4",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is there a committee established for making decisions on information and cyber security matters?",
        policy: "1.5",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is there a separate committee dedicated to decisions on information and cyber security risks?",
        policy: "1.6",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are end-user responsibilities regarding information and cyber security clearly communicated and explained?",
        policy: "1.7",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Have you taken steps to develop the information security capacity of accountable individuals through training and awareness programs?",
        policy: "1.8",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Do you conduct background checks and security clearances for officials dealing with sensitive or critical information assets?",
        policy: "1.9",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is information security considered in the design and implementation of the organization’s functions, policies, strategies, or projects?",
        policy: "1.10",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Have you allocated a budget to support information security activities and initiatives?",
        policy: "1.11",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Have you developed and implemented action plans to achieve the organization's information security objectives in a systematic and measurable approach?",
        policy: "1.12",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Have you systematically identified information assets that hold value to the organization?",
        policy: "2.1",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Do you conduct risk assessments to evaluate and quantify the risks associated with identified information assets?",
        policy: "2.2",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Do you periodically reassess the value of information assets?",
        policy: "2.3",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Do you regularly reassess and update risk assessments for information assets?",
        policy: "2.4",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are information assets classified based on sensitivity or other relevant criteria?",
        policy: "2.5",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Do you maintain an IT Assets Register to record and track all IT assets within the organization?",
        policy: "2.6",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are IT assets classified based on their criticality to the organization's operations and overall security posture?",
        policy: "2.7",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are owners clearly identified and designated for each information and IT asset?",
        policy: "2.8",
      },
      {
        policyDomain: "Detection of Information Security Incidents",
        assessmentCriteria:
          "Are all staff instructed to promptly report any suspicious activity or security policy violation to the designated person in charge of Information Security?",
        policy: "4.1",
      },
      {
        policyDomain: "Detection of Information Security Incidents",
        assessmentCriteria:
          "Are cyber security incidents reported promptly to Sri Lanka CERT or any other relevant party?",
        policy: "4.2",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "Do you have an Incident Response Plan developed and maintained?",
        policy: "5.1",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "Is the Incident Response Plan activated promptly in the event of an information and cyber security incident?",
        policy: "5.2",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "Do you have a comprehensive Disaster Recovery Plan developed?",
        policy: "5.3",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "Is the Disaster Recovery Plan activated promptly in the event of a disaster or significant disruptive event?",
        policy: "5.4",
      },
      {
        policyDomain: "Access Control Framework",
        assessmentCriteria:
          "Is there a unique identifier and strong authentication mechanism for each user?",
        policy: "6.1",
      },
      {
        policyDomain: "Access Control Framework",
        assessmentCriteria:
          "Are authorization policies clearly defined for user access?",
        policy: "6.2",
      },
      {
        policyDomain: "Access Control Framework",
        assessmentCriteria:
          "Are there established procedures for access provisioning and de-provisioning?",
        policy: "6.3",
      },
      {
        policyDomain: "Access Control Framework",
        assessmentCriteria:
          "Is there a regular review and revalidation of user access rights?",
        policy: "6.4",
      },
      {
        policyDomain: "Access Control Framework",
        assessmentCriteria:
          "Are physical access controls implemented to prevent unauthorized access to secure areas?",
        policy: "6.5",
      },
      {
        policyDomain: "Access Control Framework",
        assessmentCriteria:
          "Are remote access policies in place to ensure security?",
        policy: "6.6",
      },
      {
        policyDomain: "Access Control Framework",
        assessmentCriteria:
          "Are incidents related to access control required to be reported immediately?",
        policy: "6.7",
      },
      {
        policyDomain: "Access Control Framework",
        assessmentCriteria:
          "Is there ongoing training and awareness about access control policies?",
        policy: "6.8",
      },
      {
        policyDomain: "Access Control Framework",
        assessmentCriteria:
          "Do your access control policies comply with legal and regulatory requirements?",
        policy: "6.9",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is there a formal IT governance framework in place?",
        policy: "7.1",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is a senior management representative appointed for overseeing Information Security?",
        policy: "7.2",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are risk assessments regularly conducted to identify and prioritize IT security risks?",
        policy: "7.3",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is there a continuous improvement process for Information Security?",
        policy: "7.4",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are roles and responsibilities for IT security personnel clearly defined?",
        policy: "7.5",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are necessary training and resources provided for IT security personnel?",
        policy: "7.6",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are IT security policies and procedures well-known among IT security personnel?",
        policy: "7.7",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is there an established process for reporting and investigating IT security incidents?",
        policy: "7.8",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is there a continuous monitoring program in place to assess compliance with IT security policies?",
        policy: "7.9",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are strong password policies established and enforced?",
        policy: "8.1",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is multi-factor authentication implemented for sensitive systems and data?",
        policy: "8.2",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Do password complexity requirements align with industry best practices?",
        policy: "8.3",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are user awareness programs on password security provided?",
        policy: "8.4",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Do password management practices align with regulatory requirements?",
        policy: "8.5",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria: "Are stored passwords encrypted or masked?",
        policy: "8.6",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria: "Is adaptive authentication implemented?",
        policy: "8.7",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria: "Is there a secure process for password recovery?",
        policy: "8.8",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are there monitoring and anomaly detection tools for password-related activities?",
        policy: "8.9",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are there periodic security awareness training sessions on password security?",
        policy: "8.10",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is there a defined process for handling exceptions to password policies?",
        policy: "8.11",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is there a policy for backup management implemented?",
        policy: "9.1",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria: "Are backups stored remotely and logged?",
        policy: "9.2",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are automated backups reviewed regularly for sensitive data?",
        policy: "9.3",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is recovery data protected with encryption or data separation?",
        policy: "9.4",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is recovery data maintained using version control?",
        policy: "9.5",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria: "Is there a documented backup retention policy?",
        policy: "9.6",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are cloud-based backup solutions used and compliant with security standards?",
        policy: "9.7",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are backup and incident response plans integrated?",
        policy: "9.8",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are backups configured in an immutable state to prevent modifications?",
        policy: "9.9",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is there continuous testing of backup and recovery processes?",
        policy: "9.10",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Are Vulnerability Assessments and Penetration Tests conducted?",
        policy: "10.1",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is there an authorized end-user software list available?",
        policy: "10.2",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria: "Is VAPT performed periodically?",
        policy: "10.3",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria: "Are actions taken to address findings from VAPT?",
        policy: "10.4",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is the vulnerability assessment process effective in identifying security risks?",
        policy: "10.5",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is there a patch management process to address vulnerabilities promptly?",
        policy: "10.6",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is vulnerability management integrated with configuration management processes?",
        policy: "10.7",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Does the organization collaborate externally to stay informed about vulnerabilities?",
        policy: "10.8",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Are metrics and reporting mechanisms available for tracking vulnerability management efforts?",
        policy: "10.9",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is there a documented timeline for remediating identified vulnerabilities?",
        policy: "10.10",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Has the organization implemented a formalized procedure for identifying, documenting, and approving all changes?",
        policy: "11.1",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are changes subjected to meticulous planning and testing before implementation?",
        policy: "11.2",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is there a specific approach implemented for evaluating the impact of changes?",
        policy: "11.3",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are thorough risk assessments conducted as a result of organizational changes?",
        policy: "11.4",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are measures implemented to effectively mitigate identified risks after changes?",
        policy: "11.5",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are security controls reviewed and tested after changes are made?",
        policy: "11.6",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is there effective communication of change details to all relevant parties?",
        policy: "11.7",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is there a comprehensive documentation and knowledge transfer process for changes?",
        policy: "11.8",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Does the organization have a plan for rolling back changes in case of unexpected issues?",
        policy: "11.9",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are automated tools used for managing change requests, approvals, and tracking?",
        policy: "11.10",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are metrics established to measure the performance of the change management process?",
        policy: "11.11",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is change documentation accessible to authorized personnel?",
        policy: "11.12",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is there an up-to-date inventory of all hardware and software assets maintained?",
        policy: "12.1",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Are processes in place for prioritizing patches based on criticality and business impact?",
        policy: "12.2",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is there a testing environment that mirrors the production environment for validating patches?",
        policy: "12.3",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is there a streamlined process for applying critical patches in emergency situations?",
        policy: "12.4",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Are automated tools implemented for deploying patches?",
        policy: "12.5",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Are detailed records of applied patches maintained?",
        policy: "12.6",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is the patch management process integrated with the change management system?",
        policy: "12.7",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is effective communication with vendors maintained to stay informed about patches?",
        policy: "12.8",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is there a plan for rolling back patches in case of issues, and is it tested periodically?",
        policy: "12.9",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Are there reporting and metrics related to patch management effectiveness?",
        policy: "12.10",
      },
    ],
  },
  {
    category: "Educational Institutions",
    policyDomain: "Information and Cyber Security Governance",
    checklists: [
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Has the organization appointed an Information Security Officer (ISO)?",
        policy: "1.1",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are the ISO's responsibilities clearly defined and assigned?",
        policy: "1.2",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "In the absence of an ISO, are responsibilities assigned to the Chief Information Officer (CIO) or a designated IT officer?",
        policy: "1.3",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are information security audit responsibilities assigned to an Information Auditor?",
        policy: "1.4",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is there a committee responsible for making decisions on information and cyber security matters?",
        policy: "1.5",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is there a separate committee for decisions on information and cyber security risks?",
        policy: "1.6",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are end-user responsibilities regarding information and cyber security clearly communicated and explained?",
        policy: "1.7",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Has the organization taken proactive steps to develop information security capacity through training and awareness programs?",
        policy: "1.8",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are background checks and security clearances conducted for officials dealing with sensitive information?",
        policy: "1.9",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is information security considered in the design and implementation of the organization’s functions and projects?",
        policy: "1.10",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Is a budget allocated to support information security activities and initiatives?",
        policy: "1.11",
      },
      {
        policyDomain: "Information and Cyber Security Governance",
        assessmentCriteria:
          "Are action plans developed and implemented to achieve the organization's information security objectives?",
        policy: "1.12",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Has the organization systematically identified valuable information assets?",
        policy: "2.1",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are risk assessments conducted for these information assets?",
        policy: "2.2",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are the values of information assets periodically reassessed?",
        policy: "2.3",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are risks associated with information assets regularly reassessed and updated?",
        policy: "2.4",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are information assets classified based on sensitivity?",
        policy: "2.5",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria: "Is there a maintained IT Assets Register?",
        policy: "2.6",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are IT assets classified based on their criticality?",
        policy: "2.7",
      },
      {
        policyDomain: "Identify Assets, Owners, Users, and Risks",
        assessmentCriteria:
          "Are asset owners clearly identified and designated?",
        policy: "2.8",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is sensitive information encrypted prior to storage?",
        policy: "3.1",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is sensitive information encrypted before transmission?",
        policy: "3.2",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is sensitive information processed or stored only in secure areas?",
        policy: "3.3",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are secure areas protected from environmental risks?",
        policy: "3.4",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are there protocols to prevent unauthorized access to secure areas?",
        policy: "3.5",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is continued secure processing and storage of sensitive information maintained?",
        policy: "3.6",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are environmental protection measures adopted in secure areas?",
        policy: "3.7",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are measures to prevent unauthorized entry to secure areas continuously enforced?",
        policy: "3.8",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is there an Identity Management and Access Control Policy in place?",
        policy: "3.9",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are strong authentication methods used to enhance access security?",
        policy: "3.10",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is data sovereignty assured during processing and storage?",
        policy: "3.11",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is a risk assessment conducted before obtaining cloud services?",
        policy: "3.12",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are all operating systems used by the organization licensed?",
        policy: "3.13",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are OS updates with the latest patches regularly installed?",
        policy: "3.14",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are critical patches installed in a timely manner?",
        policy: "3.15",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is antimalware software installed on all machines?",
        policy: "3.16",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is the use of personal emails for official communications restricted?",
        policy: "3.17",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria: "Are email filters set up to detect malware?",
        policy: "3.18",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria: "Is encryption used for email transmission?",
        policy: "3.19",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria: "Are firewalls implemented within the network?",
        policy: "3.20",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria: "Is a secure VPN used for remote access?",
        policy: "3.21",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria: "Is VPN usage mandatory for remote users?",
        policy: "3.22",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria: "Are data backup procedures regularly followed?",
        policy: "3.23",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria: "Is secure backup storage ensured?",
        policy: "3.24",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are secure methods followed for the disposal of electronic media?",
        policy: "3.25",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is there an internal information security audit program?",
        policy: "3.26",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are Vulnerability Assessments and Penetration Testing conducted through Sri Lanka CERT prior to any software application deployment?",
        policy: "3.27",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria: "Is Network VAPT performed regularly?",
        policy: "3.28",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are work-from-home guidelines issued by Sri Lanka CERT adhered to?",
        policy: "3.29",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Is there a formal procedure for registering personal devices within the organization?",
        policy: "3.30",
      },
      {
        policyDomain: "Protection of Information Assets",
        assessmentCriteria:
          "Are personal devices prohibited from processing or storing critical data?",
        policy: "3.31",
      },
      {
        policyDomain: "Detection of Information Security Incidents",
        assessmentCriteria:
          "Are all staff instructed to report any suspicious activities promptly?",
        policy: "4.1",
      },
      {
        policyDomain: "Detection of Information Security Incidents",
        assessmentCriteria:
          "Are cyber security incidents reported promptly to Sri Lanka CERT or another relevant party?",
        policy: "4.2",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "Has the organization developed and maintained an Incident Response Plan?",
        policy: "5.1",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "Is the Incident Response Plan activated promptly in the event of a cyber security incident?",
        policy: "5.2",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria: "Is there a comprehensive Disaster Recovery Plan?",
        policy: "5.3",
      },
      {
        policyDomain: "Response to Information Security Incidents",
        assessmentCriteria:
          "Is the Disaster Recovery Plan activated promptly in the event of a disaster?",
        policy: "5.4",
      },
      {
        policyDomain: "Bring Your Own Device (BYOD)",
        assessmentCriteria:
          "Are acceptable use guidelines for BYOD clearly defined?",
        policy: "6.1",
      },
      {
        policyDomain: "Bring Your Own Device (BYOD)",
        assessmentCriteria:
          "Are robust security measures required on all BYOD devices?",
        policy: "6.2",
      },
      {
        policyDomain: "Bring Your Own Device (BYOD)",
        assessmentCriteria:
          "Is there a process for employees to report lost or stolen BYOD devices promptly?",
        policy: "6.3",
      },
      {
        policyDomain: "Bring Your Own Device (BYOD)",
        assessmentCriteria:
          "Is there a mandatory device registration and enrollment process for BYOD devices?",
        policy: "6.4",
      },
      {
        policyDomain: "Bring Your Own Device (BYOD)",
        assessmentCriteria:
          "Is remote device management and monitoring utilized?",
        policy: "6.5",
      },
      {
        policyDomain: "Bring Your Own Device (BYOD)",
        assessmentCriteria:
          "Is device segregation and containerization encouraged on BYOD devices?",
        policy: "6.6",
      },
      {
        policyDomain: "Bring Your Own Device (BYOD)",
        assessmentCriteria:
          "Is ongoing security awareness training provided for BYOD users?",
        policy: "6.7",
      },
      {
        policyDomain: "Bring Your Own Device (BYOD)",
        assessmentCriteria:
          "Are regular security assessments conducted on BYOD devices?",
        policy: "6.8",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Is there an Identification and Authentication Policy ensuring unique identifiers and strong authentication mechanisms?",
        policy: "7.1",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Is an Authorization Policy in place defining access rules and emphasizing least privilege?",
        policy: "7.2",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Are Access Provisioning and De-provisioning procedures outlined?",
        policy: "7.3",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Is there a process for User Access Review and Revalidation?",
        policy: "7.4",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Are Physical Access Controls implemented to control entry to secure areas?",
        policy: "7.5",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Is a Remote Access Policy regulating secure and approved remote connections in place?",
        policy: "7.6",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Are Incident Response and Reporting procedures required for immediate security incident reporting?",
        policy: "7.7",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Are ongoing Training and Awareness programs provided?",
        policy: "7.8",
      },
      {
        policyDomain: "Access Control",
        assessmentCriteria:
          "Is Compliance and Enforcement of access control policies ensured?",
        policy: "7.9",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is there a formal IT Governance Framework reviewed and in place?",
        policy: "8.1",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is a senior management representative appointed to oversee Information Security?",
        policy: "8.2",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are regular Risk Assessments conducted to identify IT security risks?",
        policy: "8.3",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is a Continuous Improvement Process for Information Security implemented?",
        policy: "8.4",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are clear roles and responsibilities for IT security personnel evaluated and defined?",
        policy: "8.5",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is necessary training and resources provision for IT security personnel verified?",
        policy: "8.6",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Are IT security personnel aware of the organization's IT security policies and procedures?",
        policy: "8.7",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is there a process for reporting and investigating IT security incidents?",
        policy: "8.8",
      },
      {
        policyDomain: "IT Governance and Security Oversight",
        assessmentCriteria:
          "Is a Continuous Monitoring Program to assess compliance with IT security policies in place?",
        policy: "8.9",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria: "Are strong Password Policies enforced?",
        policy: "9.1",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are Password Complexity requirements evaluated against industry best practices?",
        policy: "9.2",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are User Awareness Programs on password security provided?",
        policy: "9.3",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are Password Management practices evaluated for regulatory alignment?",
        policy: "9.4",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria: "Are stored passwords encrypted or masked?",
        policy: "9.5",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria: "Is Adaptive Authentication implemented?",
        policy: "9.6",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Is there a secure process for users to recover or reset passwords?",
        policy: "9.7",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are Monitoring and Anomaly Detection tools employed for password-related activities?",
        policy: "9.8",
      },
      {
        policyDomain: "Password Management and Security",
        assessmentCriteria:
          "Are periodic Security Awareness Training sessions on password security conducted?",
        policy: "9.9",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria: "Is a policy for Backup Management implemented?",
        policy: "10.1",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are backups stored in a remote location and logged appropriately?",
        policy: "10.2",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are automated backups reviewed weekly or as needed for sensitive data?",
        policy: "10.3",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is Recovery Data protected by encryption or data separation?",
        policy: "10.4",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is there maintenance of Recovery Data using version control?",
        policy: "10.5",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is a Backup Retention Policy specifying the duration for retaining backups documented?",
        policy: "10.6",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Are cloud-based backup solutions compliant with security and privacy standards?",
        policy: "10.7",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is the Backup and Incident Response Plan integrated?",
        policy: "10.8",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria: "Are Backup Monitoring and Alerts in place?",
        policy: "10.9",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria: "Are Immutable Backups configured?",
        policy: "10.10",
      },
      {
        policyDomain: "Backup and Recovery Management",
        assessmentCriteria:
          "Is Backup Versioning facilitated for data retrieval needs?",
        policy: "10.11",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Are Vulnerability Assessments and Penetration Tests (VAPT) conducted regularly?",
        policy: "11.1",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Are records of vulnerabilities and VAPTs maintained?",
        policy: "11.2",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is there an authorized end-user software list available?",
        policy: "11.3",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria: "Is VAPT performed periodically?",
        policy: "11.4",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Has the organization taken necessary actions to address VAPT findings?",
        policy: "11.5",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is the vulnerability assessment process effective in identifying and prioritizing potential security risks?",
        policy: "11.6",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is there an effective patch management process to address vulnerabilities promptly after identification?",
        policy: "11.7",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is vulnerability management integrated with configuration management processes?",
        policy: "11.8",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Does the organization collaborate with external sources to stay informed about emerging vulnerabilities?",
        policy: "11.9",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Are there effective metrics and reporting mechanisms for tracking the success of vulnerability management efforts?",
        policy: "11.10",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Is there a documented timeline for remediating identified vulnerabilities, and is it consistently adhered to?",
        policy: "11.11",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Does the vulnerability management process consider asset criticality when prioritizing remediation efforts?",
        policy: "11.12",
      },
      {
        policyDomain: "Vulnerability Management",
        assessmentCriteria:
          "Does the organization employ continuous monitoring mechanisms to identify and assess new vulnerabilities in a timely manner?",
        policy: "11.13",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Has the organization implemented a formalized procedure for identifying, documenting, and approving all changes?",
        policy: "12.1",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Do changes undergo meticulous planning and testing prior to implementation?",
        policy: "12.2",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is there a specific approach implemented for evaluating the impact of changes?",
        policy: "12.3",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are thorough risk assessments conducted resulting from organizational changes?",
        policy: "12.4",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are measures implemented to effectively mitigate identified risks?",
        policy: "12.5",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are security controls reviewed and tested after changes are made?",
        policy: "12.6",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is post-implementation testing performed to validate the effectiveness of changes?",
        policy: "12.7",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are change details effectively communicated to all relevant parties?",
        policy: "12.8",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is there a process in place to document changes comprehensively and facilitate knowledge transfer?",
        policy: "12.9",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Does the organization have a well-defined plan for rolling back changes if necessary, and is it tested periodically?",
        policy: "12.10",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Does the organization leverage automated tools for change management?",
        policy: "12.11",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Are there metrics to measure the performance and effectiveness of the change management process?",
        policy: "12.12",
      },
      {
        policyDomain: "Change Management",
        assessmentCriteria:
          "Is change documentation easily accessible to authorized personnel?",
        policy: "12.13",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Does the organization maintain an up-to-date inventory of all hardware and software assets?",
        policy: "13.1",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is the inventory accurate and complete, including critical details like version numbers and dependencies?",
        policy: "13.2",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Are patches prioritized based on the criticality of vulnerabilities and potential business impact?",
        policy: "13.3",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Does the organization maintain a testing environment that mirrors the production environment for patch validation?",
        policy: "13.4",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is there a streamlined process for applying critical patches in emergency situations?",
        policy: "13.5",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Are automated tools implemented for deploying patches?",
        policy: "13.6",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Does the organization maintain detailed records of applied patches, including dates, versions, and any encountered issues?",
        policy: "13.7",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is the patch management process integrated with the organization's change management system?",
        policy: "13.8",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are access control mechanisms used on doors with logging?",
        policy: "14.1",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are entry restrictions to sensitive zones enforced effectively?",
        policy: "14.2",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Is equipment tested against hazards like fire, flood, and earthquake?",
        policy: "14.3",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are data center access restrictions effectively enforced?",
        policy: "14.4",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are limited access, guards, and CCTV monitoring employed to secure sensitive areas?",
        policy: "14.5",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are biometric access controls employed for sensitive areas?",
        policy: "14.6",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are physical intrusion detection systems, such as motion sensors or alarms, implemented?",
        policy: "14.7",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are environmental controls regularly tested for effectiveness and reliability?",
        policy: "14.8",
      },
      {
        policyDomain: "Physical and Environmental Security",
        assessmentCriteria:
          "Are secure disposal procedures for sensitive materials and equipment assessed for compliance?",
        policy: "14.9",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Is there a documented policy for comprehensive event logging?",
        policy: "15.1",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Is a comprehensive inventory covering all systems, applications, and network components generating log events maintained?",
        policy: "15.2",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Are administrator and operator activities systematically logged and regularly reviewed?",
        policy: "15.3",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria: "Are event logs retained for an adequate period?",
        policy: "15.4",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Are real-time log generation and continuous monitoring implemented?",
        policy: "15.5",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Are logs backed up and protected from unauthorized access?",
        policy: "15.6",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Is log integrity regularly verified to ensure logs have not been tampered with?",
        policy: "15.7",
      },
      {
        policyDomain: "Log Management",
        assessmentCriteria:
          "Are user activities, especially interactions with sensitive data, logged and analyzed?",
        policy: "15.8",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Are network controls such as VLANs implemented to safeguard information systems?",
        policy: "16.1",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Are network connections restricted to enhance security?",
        policy: "16.2",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Are there measures in place to protect public-facing networks?",
        policy: "16.3",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Is there a defined and monitored set of network-related service levels?",
        policy: "16.4",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Are network-related service levels defined and monitored effectively?",
        policy: "16.5",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Is Network Access Control (NAC) implemented to manage and restrict access based on device health and user identity?",
        policy: "16.6",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Are Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) deployed to detect and respond to network threats?",
        policy: "16.7",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Is network segmentation implemented to isolate critical assets and limit lateral movement in case of a security breach?",
        policy: "16.8",
      },
      {
        policyDomain: "Network Security",
        assessmentCriteria:
          "Is continuous network monitoring in place to promptly identify and respond to anomalous activities?",
        policy: "16.9",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Are capacity projections for hardware, software, and personnel regularly reviewed and adjusted?",
        policy: "17.1",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Are capacity requirements for all systems identified based on their business criticality?",
        policy: "17.2",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Is continuous monitoring and tuning of resources performed to maintain required system performance?",
        policy: "17.3",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Are detective controls in place to indicate system issues in a timely manner?",
        policy: "17.4",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Is scalability assessed to ensure systems can handle increased loads and demands?",
        policy: "17.5",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Is a business impact analysis conducted related to capacity management?",
        policy: "17.6",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Are resource optimization strategies employed to dynamically allocate and deallocate resources based on demand?",
        policy: "17.7",
      },
      {
        policyDomain: "Capacity Management",
        assessmentCriteria:
          "Is capacity planning documentation regularly updated and comprehensive?",
        policy: "17.8",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Does the organization maintain an up-to-date inventory of all hardware and software assets?",
        policy: "18.1",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Are patches prioritized based on the criticality of vulnerabilities and business impact?",
        policy: "18.2",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is there a testing environment that mirrors the production environment for patch validation?",
        policy: "18.3",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is there a streamlined process for applying critical patches in emergencies?",
        policy: "18.4",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria: "Are automated tools used for deploying patches?",
        policy: "18.5",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Are detailed records of applied patches maintained?",
        policy: "18.6",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is the patch management process integrated with the organization’s change management system?",
        policy: "18.7",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is there effective communication with vendors regarding patches and vulnerabilities?",
        policy: "18.8",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is there a plan for rolling back patches if they cause issues, and is it periodically tested?",
        policy: "18.9",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Are reporting and metrics related to patch management effectively maintained?",
        policy: "18.10",
      },
      {
        policyDomain: "Patch Management",
        assessmentCriteria:
          "Is the patch management process integrated with endpoint security solutions?",
        policy: "18.11",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Is the Business Continuity Plan (BCP) adequate for ensuring the continuity of information security and data protection?",
        policy: "19.1",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Are incident response personnel assessed to ensure they have the necessary authority and competence?",
        policy: "19.2",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Are documented plans and recovery procedures regularly reviewed and approved?",
        policy: "19.3",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Is the effectiveness of BCP testing verified during simulated disaster recovery scenarios?",
        policy: "19.4",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Are training programs for incident response personnel reviewed for adequacy and effectiveness?",
        policy: "19.5",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Is cyber insurance considered as part of the organization’s risk management strategy?",
        policy: "19.6",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Are collaborative exercises conducted to improve coordination and communication in the BCP?",
        policy: "19.7",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Are continuous improvement mechanisms in place within the BCP?",
        policy: "19.8",
      },
      {
        policyDomain: "Business Continuity & Disaster Recovery Management",
        assessmentCriteria:
          "Are external dependencies assessed and documented in the BCP?",
        policy: "19.9",
      },
      {
        policyDomain: "Mobile Device Management (MDM) Policy",
        assessmentCriteria:
          "Is Mobile Device Management (MDM) software mandatorily installed and activated on all company-issued mobile devices?",
        policy: "20.1",
      },
      {
        policyDomain: "Mobile Device Management (MDM) Policy",
        assessmentCriteria:
          "Is device encryption enabled on all company-issued mobile devices to protect sensitive data?",
        policy: "20.2",
      },
      {
        policyDomain: "Mobile Device Management (MDM) Policy",
        assessmentCriteria:
          "Are remote wipe capabilities enabled on all company-issued mobile devices?",
        policy: "20.3",
      },
      {
        policyDomain: "Mobile Device Management (MDM) Policy",
        assessmentCriteria:
          "Is continuous monitoring of MDM software compliance implemented?",
        policy: "20.4",
      },
      {
        policyDomain: "Mobile Device Management (MDM) Policy",
        assessmentCriteria:
          "Is comprehensive training provided to employees on the importance of MDM policies?",
        policy: "20.5",
      },
      {
        policyDomain: "Mobile Device Management (MDM) Policy",
        assessmentCriteria:
          "Are regular audits and reporting conducted on MDM configurations and device compliance?",
        policy: "20.6",
      },
      {
        policyDomain: "Mobile Device Management (MDM) Policy",
        assessmentCriteria:
          "Is the MDM policy integrated with the organization's incident response plan?",
        policy: "20.7",
      },
      {
        policyDomain: "Mobile Device Management (MDM) Policy",
        assessmentCriteria:
          "Are updates and patches to MDM software timely implemented?",
        policy: "20.8",
      },
      {
        policyDomain: "Secure Payment Policies",
        assessmentCriteria:
          "Is strong encryption used for all data transmitted through the payment gateway, including data at rest and in transit?",
        policy: "21.1",
      },
      {
        policyDomain: "Secure Payment Policies",
        assessmentCriteria:
          "Does the payment gateway comply with legal and regulatory standards like PCI DSS?",
        policy: "21.2",
      },
      {
        policyDomain: "Secure Payment Policies",
        assessmentCriteria:
          "Are strict access controls and multi-factor authentication implemented for accessing payment gateway systems?",
        policy: "21.3",
      },
      {
        policyDomain: "Secure Payment Policies",
        assessmentCriteria:
          "Is continuous monitoring and logging of all transactions through the payment gateway conducted?",
        policy: "21.4",
      },
      {
        policyDomain: "Secure Payment Policies",
        assessmentCriteria:
          "Are advanced fraud detection and prevention technologies implemented to identify and prevent fraudulent transactions?",
        policy: "21.5",
      },
      {
        policyDomain: "Secure Payment Policies",
        assessmentCriteria:
          "Is data integrity maintained throughout the transaction process with mechanisms like data hashing and checksums?",
        policy: "21.6",
      },
      {
        policyDomain: "Secure Payment Policies",
        assessmentCriteria:
          "Is there a vendor management policy governing relationships with third-party service providers interacting with the payment gateway?",
        policy: "21.7",
      },
      {
        policyDomain: "Secure Payment Policies",
        assessmentCriteria:
          "Are there established protocols for responding to security incidents within the payment gateway ecosystem?",
        policy: "21.8",
      },
      {
        policyDomain: "Secure Payment Policies",
        assessmentCriteria:
          "Are business continuity and disaster recovery plans maintained for the payment gateway to ensure minimal downtime and data loss?",
        policy: "21.9",
      },
      {
        policyDomain: "Secure Payment Policies",
        assessmentCriteria:
          "Are regular training and security awareness programs provided to all employees involved with the payment gateway?",
        policy: "21.10",
      },
      {
        policyDomain: "Protection of Customer Data Policies",
        assessmentCriteria:
          "Are there established guidelines for the collection, use, and protection of personal information in compliance with data protection laws?",
        policy: "22.1",
      },
      {
        policyDomain: "Protection of Customer Data Policies",
        assessmentCriteria:
          "Are security controls implemented to protect data from unauthorized access, use, disclosure, disruption, modification, or destruction?",
        policy: "22.2",
      },
      {
        policyDomain: "Protection of Customer Data Policies",
        assessmentCriteria:
          "Are customer data retention and disposal policies outlining timeframes and secure deletion practices in place?",
        policy: "22.3",
      },
      {
        policyDomain: "Protection of Customer Data Policies",
        assessmentCriteria:
          "Is access to customer data controlled to ensure it is accessible only by employees who require it for their duties?",
        policy: "22.4",
      },
      {
        policyDomain: "Protection of Customer Data Policies",
        assessmentCriteria:
          "Are procedures for responding to data breaches and security incidents, including incident detection and management, in place?",
        policy: "22.5",
      },
      {
        policyDomain: "Protection of Customer Data Policies",
        assessmentCriteria:
          "Is customer data encrypted during storage and transmission to protect against unauthorized access?",
        policy: "22.6",
      },
      {
        policyDomain: "Protection of Customer Data Policies",
        assessmentCriteria:
          "Are risks associated with sharing customer data with third-party service providers managed and audited?",
        policy: "22.7",
      },
      {
        policyDomain: "Protection of Customer Data Policies",
        assessmentCriteria:
          "Are all employees trained on their responsibilities related to protecting customer data?",
        policy: "22.8",
      },
      {
        policyDomain: "Protection of Customer Data Policies",
        assessmentCriteria:
          "Are audits conducted regularly to ensure compliance with internal and external data protection regulations?",
        policy: "22.9",
      },
      {
        policyDomain: "Protection of Customer Data Policies",
        assessmentCriteria:
          "Are data integrity measures in place to maintain the accuracy and completeness of customer data?",
        policy: "22.10",
      },
      {
        policyDomain: "Training and Awareness Policies",
        assessmentCriteria:
          "Is regular security awareness training conducted for all employees to familiarize them with security practices and potential threats?",
        policy: "23.1",
      },
      {
        policyDomain: "Training and Awareness Policies",
        assessmentCriteria:
          "Are employees receiving role-specific training, especially those handling sensitive information or critical infrastructure?",
        policy: "23.2",
      },
      {
        policyDomain: "Training and Awareness Policies",
        assessmentCriteria:
          "Is compliance training provided on relevant regulations such as HIPAA, PCI DSS, or GDPR?",
        policy: "23.3",
      },
      {
        policyDomain: "Training and Awareness Policies",
        assessmentCriteria:
          "Is specialized training on recognizing and responding to phishing and other social engineering attacks provided?",
        policy: "23.4",
      },
      {
        policyDomain: "Training and Awareness Policies",
        assessmentCriteria:
          "Is training on data privacy and protection, covering data classification and secure handling procedures, provided?",
        policy: "23.5",
      },
      {
        policyDomain: "Training and Awareness Policies",
        assessmentCriteria:
          "Are employees educated on physical security protocols, including badge usage and visitor management?",
        policy: "23.6",
      },
      {
        policyDomain: "Training and Awareness Policies",
        assessmentCriteria:
          "Are employees instructed on cybersecurity best practices, such as strong passwords and secure browsing habits?",
        policy: "23.7",
      },
      {
        policyDomain: "Training and Awareness Policies",
        assessmentCriteria:
          "Are employees trained on how to respond in emergencies, including evacuation procedures and the use of emergency equipment?",
        policy: "23.8",
      },
      {
        policyDomain: "Training and Awareness Policies",
        assessmentCriteria:
          "Are opportunities for continuous learning and skill development offered to employees?",
        policy: "23.9",
      },
      {
        policyDomain: "Training and Awareness Policies",
        assessmentCriteria:
          "Are training feedback and evaluation mechanisms in place to assess the effectiveness of training programs and ensure continuous improvement?",
        policy: "23.10",
      },
    ],
  },
  {
    category: "E-Commerce Organizations",
    policyDomain: "Information and Cyber Security Governance",
    checklists: [
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Has the organization appointed an Information Security Officer (ISO) to oversee information and cyber security?",
          policy: "1.1"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Are the information and cyber security responsibilities of the ISO clearly defined and assigned?",
          policy: "1.2"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "In the absence of an ISO, are these responsibilities assigned to the Chief Information Officer (CIO) or another designated IT officer?",
          policy: "1.3"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Are information security audit responsibilities assigned to the Chief Information Auditor (IA)?",
          policy: "1.4"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Has the organization established a committee responsible for making decisions on information and cyber security matters?",
          policy: "1.5"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Is there a separate committee dedicated to making decisions on information and cyber security risks?",
          policy: "1.6"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Are end-user responsibilities regarding information and cyber security clearly communicated and explained?",
          policy: "1.7"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Does the organization take proactive steps to develop the information security capacity of accountable individuals through training and awareness programs?",
          policy: "1.8"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Are background checks and security clearances conducted for officials dealing with confidential information or accessing Critical National Information Infrastructure (CNII)?",
          policy: "1.9"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Is information security considered in the design and implementation of the organization’s functions, policies, strategies, or projects?",
          policy: "1.10"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Are financial provisions allocated to support information security activities and initiatives?",
          policy: "1.11"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Are action plans developed and implemented to achieve the organization's information security objectives in a systematic and measurable approach?",
          policy: "1.12"
      },
      {
          policyDomain: "Identify Assets, Owners, Users, and Risks",
          assessmentCriteria: "Has the organization systematically identified information assets that hold value?",
          policy: "2.1"
      },
      {
          policyDomain: "Identify Assets, Owners, Users, and Risks",
          assessmentCriteria: "Are risk assessments conducted to evaluate and quantify risks associated with identified information assets?",
          policy: "2.2"
      },
      {
          policyDomain: "Identify Assets, Owners, Users, and Risks",
          assessmentCriteria: "Is the value of information assets periodically reassessed?",
          policy: "2.3"
      },
      {
          policyDomain: "Identify Assets, Owners, Users, and Risks",
          assessmentCriteria: "Are risk assessments regularly reassessed and updated to address evolving threats and vulnerabilities?",
          policy: "2.4"
      },
      {
          policyDomain: "Identify Assets, Owners, Users, and Risks",
          assessmentCriteria: "Are information assets classified based on sensitivity or other relevant criteria?",
          policy: "2.5"
      },
      {
          policyDomain: "Identify Assets, Owners, Users, and Risks",
          assessmentCriteria: "Is an IT Assets Register maintained to record and track all IT assets within the organization?",
          policy: "2.6"
      },
      {
          policyDomain: "Identify Assets, Owners, Users, and Risks",
          assessmentCriteria: "Are IT assets classified based on their criticality to the organization's operations and overall security posture?",
          policy: "2.7"
      },
      {
          policyDomain: "Identify Assets, Owners, Users, and Risks",
          assessmentCriteria: "Are owners clearly identified and designated for each information and IT asset?",
          policy: "2.8"
      },
      {
      policyDomain: "Protection of Information Assets",
      assessmentCriteria: "Is encryption implemented for sensitive information prior to storage?",
      policy: "3.1"
  },
  {
      policyDomain: "Protection of Information Assets",
      assessmentCriteria: "Is sensitive information encrypted before being transmitted through electronic channels?",
      policy: "3.2"
  },
  {
      policyDomain: "Protection of Information Assets",
      assessmentCriteria: "Is sensitive information processed or stored only in designated secure areas with appropriate controls?",
      policy: "3.3"
  },
  {
      policyDomain: "Protection of Information Assets",
      assessmentCriteria: "Are secure areas protected from environmental risks such as fire, flood, and extreme temperatures?",
      policy: "3.4"
  },
  {
      policyDomain: "Protection of Information Assets",
      assessmentCriteria: "Are protocols and controls in place to prevent unauthorized access to secure areas?",
      policy: "3.5"
  },
  {
      policyDomain: "Protection of Information Assets",
      assessmentCriteria: "Is an Identity Management and Access Control Policy implemented to regulate access to information systems and assets?",
      policy: "3.6"
  },
  {
      policyDomain: "Protection of Information Assets",
      assessmentCriteria: "Are strong authentication methods used to enhance access security?",
      policy: "3.7"
  },
  {
      policyDomain: "Protection of Information Assets",
      assessmentCriteria: "Does the organization comply with data sovereignty regulations in the processing and storage of information?",
      policy: "3.8"
  },
  {
      policyDomain: "Protection of Information Assets",
      assessmentCriteria: "Are all operating systems used by the organization updated with the latest patches and fixes supplied by the vendor?",
      policy: "3.9"
  },
  {
      policyDomain: "Protection of Information Assets",
      assessmentCriteria: "Are antimalware software with valid licenses installed on all machines to protect against malicious software?",
      policy: "3.10"
  },
  {
      policyDomain: "Detection of Information Security Incidents",
      assessmentCriteria: "Are staff instructed to report any suspicious activity or security policy violations to the designated person in charge of Information Security?",
      policy: "4.1"
  },
  {
      policyDomain: "Response to Information Security Incidents",
      assessmentCriteria: "Has the organization developed and maintained an Incident Response Plan for cyber security incidents?",
      policy: "5.1"
  },
  {
      policyDomain: "Response to Information Security Incidents",
      assessmentCriteria: "Is the Disaster Recovery Plan activated promptly in the event of a disaster to restore disrupted services and ensure continuity of operations?",
      policy: "5.2"
  },
  {
      policyDomain: "Bring Your Own Device (BYOD) Policies",
      assessmentCriteria: "Are acceptable use guidelines for personal devices used for work purposes clearly defined?",
      policy: "6.1"
  },
  {
      policyDomain: "Bring Your Own Device (BYOD) Policies",
      assessmentCriteria: "Are robust security measures required on all BYOD devices?",
      policy: "6.2"
  },
  {
      policyDomain: "Bring Your Own Device (BYOD) Policies",
      assessmentCriteria: "Is there a process for employees to report lost or stolen BYOD devices promptly?",
      policy: "6.3"
  },
  {
      policyDomain: "Bring Your Own Device (BYOD) Policies",
      assessmentCriteria: "Is a mandatory registration and enrollment process for BYOD devices accessing company resources implemented?",
      policy: "6.4"
  },
  {
      policyDomain: "Bring Your Own Device (BYOD) Policies",
      assessmentCriteria: "Is Mobile Device Management (MDM) used to enable remote management and monitoring of BYOD devices?",
      policy: "6.5"
  },
  {
      policyDomain: "Access Control Framework",
      assessmentCriteria: "Is each user provided with a unique identifier for system access?",
      policy: "7.1"
  },
  {
      policyDomain: "Access Control Framework",
      assessmentCriteria: "Are authorization policies in place to define access conditions based on the principle of least privilege?",
      policy: "7.2"
  },
  {
      policyDomain: "Access Control Framework",
      assessmentCriteria: "Are access provisioning and de-provisioning procedures clearly outlined and followed?",
      policy: "7.3"
  },
  {
      policyDomain: "Access Control Framework",
      assessmentCriteria: "Are user access rights periodically reviewed and revalidated?",
      policy: "7.4"
  },
  {
      policyDomain: "Access Control Framework",
      assessmentCriteria: "Are physical access controls to secure areas enforced effectively?",
      policy: "7.5"
  },
  {
      policyDomain: "Access Control Framework",
      assessmentCriteria: "Is remote access to organizational resources regulated through secure methods?",
      policy: "7.6"
  },
  {
      policyDomain: "Access Control Framework",
      assessmentCriteria: "Are incident reporting procedures adequately defined and enforced?",
      policy: "7.7"
  },
  {
      policyDomain: "Access Control Framework",
      assessmentCriteria: "Is regular training provided on access control policies and security awareness?",
      policy: "7.8"
  },
  {
      policyDomain: "Access Control Framework",
      assessmentCriteria: "Are compliance and enforcement measures for access control policies actively maintained?",
      policy: "7.9"
  },
  {
      policyDomain: "IT Governance and Security Oversight",
      assessmentCriteria: "Has the organization established a formal IT governance framework?",
      policy: "8.1"
  },
  {
      policyDomain: "IT Governance and Security Oversight",
      assessmentCriteria: "Is a senior management representative appointed to oversee Information Security implementation and maintenance?",
      policy: "8.2"
  },
  {
      policyDomain: "IT Governance and Security Oversight",
      assessmentCriteria: "Are regular risk assessments conducted to identify and prioritize IT security risks?",
      policy: "8.3"
  },
  {
      policyDomain: "IT Governance and Security Oversight",
      assessmentCriteria: "Is a continuous improvement process for Information Security implemented?",
      policy: "8.4"
  },
  {
      policyDomain: "IT Governance and Security Oversight",
      assessmentCriteria: "Are roles and responsibilities for IT security personnel clearly defined and understood?",
      policy: "8.5"
  },
  {
      policyDomain: "IT Governance and Security Oversight",
      assessmentCriteria: "Are necessary training and resources provided for IT security personnel?",
      policy: "8.6"
  },
  {
      policyDomain: "IT Governance and Security Oversight",
      assessmentCriteria: "Are IT security personnel aware of the organization's IT security policies and procedures?",
      policy: "8.7"
  },
  {
      policyDomain: "IT Governance and Security Oversight",
      assessmentCriteria: "Is there a process in place for reporting and investigating IT security incidents?",
      policy: "8.8"
  },
  {
      policyDomain: "IT Governance and Security Oversight",
      assessmentCriteria: "Is a continuous monitoring program implemented to assess compliance with IT security policies and standards?",
      policy: "8.9"
  },
  {
      policyDomain: "Password Management and Security",
      assessmentCriteria: "Are strong password policies established and enforced within the organization?",
      policy: "9.1"
  },
  {
      policyDomain: "Password Management and Security",
      assessmentCriteria: "Is multi-factor authentication (MFA) implemented for sensitive systems and data?",
      policy: "9.2"
  },
  {
      policyDomain: "Password Management and Security",
      assessmentCriteria: "Are password change requirements defined and appropriate for security needs?",
      policy: "9.3"
  },
  {
      policyDomain: "Password Management and Security",
      assessmentCriteria: "Do password complexity requirements align with industry best practices?",
      policy: "9.4"
  },
  {
      policyDomain: "Password Management and Security",
      assessmentCriteria: "Are user awareness programs on password security provided?",
      policy: "9.5"
  },
  {
      policyDomain: "Password Management and Security",
      assessmentCriteria: "Do password management practices comply with relevant regulatory requirements?",
      policy: "9.6"
  },
  {
      policyDomain: "Password Management and Security",
      assessmentCriteria: "Are stored passwords encrypted or masked in databases?",
      policy: "9.7"
  },
  {
      policyDomain: "Password Management and Security",
      assessmentCriteria: "Is adaptive authentication implemented to dynamically adjust security controls?",
      policy: "9.8"
  },
  {
      policyDomain: "Password Management and Security",
      assessmentCriteria: "Is there a well-defined and secure process for users to recover or reset their passwords?",
      policy: "9.9"
  },
  {
      policyDomain: "Password Management and Security",
      assessmentCriteria: "Are monitoring and anomaly detection tools used to identify suspicious password-related activities?",
      policy: "9.10"
  },
  {
      policyDomain: "Backup and Recovery Management",
      assessmentCriteria: "Is a backup management policy implemented and actively followed?",
      policy: "10.1"
  },
  {
      policyDomain: "Backup and Recovery Management",
      assessmentCriteria: "Are backup restoration tests performed to ensure data recovery processes are effective?",
      policy: "10.2"
  },
  {
      policyDomain: "Backup and Recovery Management",
      assessmentCriteria: "Are backups stored in a remote location and properly logged?",
      policy: "10.3"
  },
  {
      policyDomain: "Backup and Recovery Management",
      assessmentCriteria: "Are automated backups conducted regularly, especially for sensitive data?",
      policy: "10.4"
  },
  {
      policyDomain: "Backup and Recovery Management",
      assessmentCriteria: "Is recovery data protected with encryption or data separation techniques?",
      policy: "10.5"
  },
  {
      policyDomain: "Backup and Recovery Management",
      assessmentCriteria: "Is a backup retention policy documented and consistently applied across different data types?",
      policy: "10.6"
  },
  {
      policyDomain: "Backup and Recovery Management",
      assessmentCriteria: "Are cloud-based backup solutions utilized, and do they comply with security and privacy standards?",
      policy: "10.7"
  },
  {
      policyDomain: "Backup and Recovery Management",
      assessmentCriteria: "Is there an integration between the backup and incident response plans?",
      policy: "10.8"
  },
  {
      policyDomain: "Backup and Recovery Management",
      assessmentCriteria: "Are backups monitored, with alerts configured for failures or anomalies?",
      policy: "10.9"
  },
  {
      policyDomain: "Backup and Recovery Management",
      assessmentCriteria: "Are backups configured to be immutable to prevent unauthorized modifications or deletions?",
      policy: "10.10"
  },
  {
      policyDomain: "Vulnerability Management",
      assessmentCriteria: "Are Vulnerability Assessments and Penetration Tests (VAPT) conducted regularly?",
      policy: "11.1"
  },
  {
      policyDomain: "Vulnerability Management",
      assessmentCriteria: "Are records of vulnerabilities and VAPTs maintained?",
      policy: "11.2"
  },
  {
      policyDomain: "Vulnerability Management",
      assessmentCriteria: "Is there an authorized end-user software list available and maintained?",
      policy: "11.3"
  },
  {
      policyDomain: "Vulnerability Management",
      assessmentCriteria: "Are actions taken to address findings from VAPTs?",
      policy: "11.4"
  },
  {
      policyDomain: "Vulnerability Management",
      assessmentCriteria: "Is the effectiveness of the vulnerability assessment process reviewed periodically?",
      policy: "11.5"
  },
  {
      policyDomain: "Vulnerability Management",
      assessmentCriteria: "Is there a patch management process in place to address identified vulnerabilities timely?",
      policy: "11.6"
  },
  {
      policyDomain: "Vulnerability Management",
      assessmentCriteria: "Is vulnerability management integrated with configuration management processes?",
      policy: "11.7"
  },
  {
      policyDomain: "Vulnerability Management",
      assessmentCriteria: "Does the organization collaborate with external sources for vulnerability information?",
      policy: "11.8"
  },
  {
      policyDomain: "Vulnerability Management",
      assessmentCriteria: "Are metrics and reporting mechanisms available for tracking vulnerability management efforts?",
      policy: "11.9"
  },
  {
      policyDomain: "Vulnerability Management",
      assessmentCriteria: "Is there a documented timeline for remediation of identified vulnerabilities?",
      policy: "11.10"
  },
  {
      policyDomain: "Change Management",
      assessmentCriteria: "Is there a formalized procedure for identifying, documenting, and approving all changes?",
      policy: "12.1"
  },
  {
      policyDomain: "Change Management",
      assessmentCriteria: "Are changes meticulously planned and tested before implementation?",
      policy: "12.2"
  },
  {
      policyDomain: "Change Management",
      assessmentCriteria: "Is the impact of changes evaluated specifically?",
      policy: "12.3"
  },
  {
      policyDomain: "Change Management",
      assessmentCriteria: "Are thorough risk assessments conducted for organizational changes?",
      policy: "12.4"
  },
  {
      policyDomain: "Change Management",
      assessmentCriteria: "Are measures implemented to effectively mitigate identified risks?",
      policy: "12.5"
  },
  {
      policyDomain: "Change Management",
      assessmentCriteria: "Are security controls reviewed and tested after changes are made?",
      policy: "12.6"
  },
  {
      policyDomain: "Change Management",
      assessmentCriteria: "Is post-implementation testing performed to validate changes?",
      policy: "12.7"
  },
  {
      policyDomain: "Change Management",
      assessmentCriteria: "Are details of changes communicated effectively to all relevant parties?",
      policy: "12.8"
  },
  {
      policyDomain: "Change Management",
      assessmentCriteria: "Is there a comprehensive process for documenting changes and facilitating knowledge transfer?",
      policy: "12.9"
  },
  {
      policyDomain: "Change Management",
      assessmentCriteria: "Is there a well-defined plan for rolling back changes if needed?",
      policy: "12.10"
  },
  {
      policyDomain: "Change Management",
      assessmentCriteria: "Are automated tools used for managing changes?",
      policy: "12.11"
  },
  {
      policyDomain: "Change Management",
      assessmentCriteria: "Are metrics established to measure the performance and effectiveness of the change management process?",
      policy: "12.12"
  },
  {
      policyDomain: "Change Management",
      assessmentCriteria: "Is the documentation related to changes easily accessible to authorized personnel?",
      policy: "12.13"
  },
  {
      policyDomain: "Secure Software Development",
      assessmentCriteria: "Has the organization implemented a secure development environment?",
      policy: "13.1"
  },
  {
      policyDomain: "Secure Software Development",
      assessmentCriteria: "Is the secure development process being maintained?",
      policy: "13.2"
  },
  {
      policyDomain: "Secure Software Development",
      assessmentCriteria: "Are development environments segregated?",
      policy: "13.3"
  },
  {
      policyDomain: "Secure Software Development",
      assessmentCriteria: "Are access controls in place to prevent unauthorized access to critical development environments?",
      policy: "13.4"
  },
  {
      policyDomain: "Secure Software Development",
      assessmentCriteria: "Are secure coding standards employed, and are code reviews conducted regularly?",
      policy: "13.5"
  },
  {
      policyDomain: "Secure Software Development",
      assessmentCriteria: "Is application penetration testing conducted?",
      policy: "13.6"
  },
  {
      policyDomain: "Secure Software Development",
      assessmentCriteria: "Are developers trained in application security concepts and secure coding practices?",
      policy: "13.7"
  },
  {
      policyDomain: "Secure Software Development",
      assessmentCriteria: "Is there a separation between production and non-production systems?",
      policy: "13.8"
  },
  {
      policyDomain: "Secure Software Development",
      assessmentCriteria: "Are standard hardening configuration templates used for application infrastructure?",
      policy: "13.9"
  },
  {
      policyDomain: "Secure Software Development",
      assessmentCriteria: "Are up-to-date and trusted third-party software components used?",
      policy: "13.10"
  },
  {
      policyDomain: "Secure Software Development",
      assessmentCriteria: "Do policies address a secure environment including security in the development lifecycle?",
      policy: "13.11"
  },
  {
      policyDomain: "Secure Software Development",
      assessmentCriteria: "Are DevSecOps principles integrated into the software development lifecycle?",
      policy: "13.12"
  },
  {
      policyDomain: "Secure Software Development",
      assessmentCriteria: "Are specific guidelines and controls in place for secure API development?",
      policy: "13.13"
  },
  {
      policyDomain: "Secure Software Development",
      assessmentCriteria: "Is there integration between software development processes and incident response plans?",
      policy: "13.14"
  },
  {
      policyDomain: "Patch Management",
      assessmentCriteria: "Does the organization maintain an up-to-date inventory of all hardware and software assets?",
      policy: "14.1"
  },
  {
      policyDomain: "Patch Management",
      assessmentCriteria: "Are vulnerabilities prioritized based on the criticality and potential business impact?",
      policy: "14.2"
  },
  {
      policyDomain: "Patch Management",
      assessmentCriteria: "Is there a testing environment that mirrors the production environment for validating patches?",
      policy: "14.3"
  },
  {
      policyDomain: "Patch Management",
      assessmentCriteria: "Is there a streamlined process for applying critical patches in emergency situations?",
      policy: "14.4"
  },
  {
      policyDomain: "Patch Management",
      assessmentCriteria: "Are automated tools implemented for deploying patches?",
      policy: "14.5"
  },
  {
      policyDomain: "Patch Management",
      assessmentCriteria: "Are detailed records of applied patches maintained, including dates and versions?",
      policy: "14.6"
  },
  {
      policyDomain: "Patch Management",
      assessmentCriteria: "Is the patch management process integrated with the organization's change management system?",
      policy: "14.7"
  },
  {
      policyDomain: "Patch Management",
      assessmentCriteria: "Is effective communication maintained with vendors about upcoming patches and vulnerabilities?",
      policy: "14.8"
  },
  {
      policyDomain: "Patch Management",
      assessmentCriteria: "Is there a documented plan for rolling back patches if needed?",
      policy: "14.9"
  },
  {
      policyDomain: "Patch Management",
      assessmentCriteria: "Are reporting and metrics related to patch management available and effective?",
      policy: "14.10"
  },
  {
      policyDomain: "Physical and Environmental Security",
      assessmentCriteria: "Are access control mechanisms used on doors with logging capabilities?",
      policy: "15.1"
  },
  {
      policyDomain: "Physical and Environmental Security",
      assessmentCriteria: "Are entry restrictions to sensitive zones enforced with additional security measures like cameras?",
      policy: "15.2"
  },
  {
      policyDomain: "Physical and Environmental Security",
      assessmentCriteria: "Is equipment tested and maintained against hazards like fire and flood?",
      policy: "15.3"
  },
  {
      policyDomain: "Physical and Environmental Security",
      assessmentCriteria: "Are data center access restrictions effectively enforced?",
      policy: "15.4"
  },
  {
      policyDomain: "Physical and Environmental Security",
      assessmentCriteria: "Are security controls in place for server rooms, including access restrictions and monitoring?",
      policy: "15.5"
  },
  {
      policyDomain: "Physical and Environmental Security",
      assessmentCriteria: "Are biometric access controls employed for sensitive areas?",
      policy: "15.6"
  },
  {
      policyDomain: "Physical and Environmental Security",
      assessmentCriteria: "Are physical intrusion detection systems, such as motion sensors, in place?",
      policy: "15.7"
  },
  {
      policyDomain: "Physical and Environmental Security",
      assessmentCriteria: "Are environmental controls like fire suppression systems regularly tested for effectiveness?",
      policy: "15.8"
  },
  {
      policyDomain: "Physical and Environmental Security",
      assessmentCriteria: "Are procedures for the secure disposal of sensitive materials and equipment adhered to?",
      policy: "15.9"
  },
  {
      policyDomain: "Physical and Environmental Security",
      assessmentCriteria: "Is there a comprehensive emergency response plan for physical security incidents?",
      policy: "15.10"
  },
  {
      policyDomain: "Log Management",
      assessmentCriteria: "Is there a documented policy for comprehensive event logging?",
      policy: "16.1"
  },
  {
      policyDomain: "Log Management",
      assessmentCriteria: "Are administrator and operator activities systematically logged and reviewed?",
      policy: "16.2"
  },
  {
      policyDomain: "Log Management",
      assessmentCriteria: "Are logs retained for an adequate period as defined by organizational needs and compliance requirements?",
      policy: "16.3"
  },
  {
      policyDomain: "Log Management",
      assessmentCriteria: "Is real-time log generation and continuous monitoring implemented?",
      policy: "16.4"
  },
  {
      policyDomain: "Log Management",
      assessmentCriteria: "Are logs regularly backed up and protected from unauthorized access?",
      policy: "16.5"
  },
  {
      policyDomain: "Log Management",
      assessmentCriteria: "Is there a clock synchronization policy across critical systems?",
      policy: "16.6"
  },
  {
      policyDomain: "Log Management",
      assessmentCriteria: "Are log integrity verification procedures in place?",
      policy: "16.7"
  },
  {
      policyDomain: "Log Management",
      assessmentCriteria: "Is user activity, especially regarding sensitive data and critical systems, logged and analyzed?",
      policy: "16.8"
  },
  {
      policyDomain: "Log Management",
      assessmentCriteria: "Is the log retention policy periodically reviewed and updated?",
      policy: "16.9"
  },
  {
      policyDomain: "Log Management",
      assessmentCriteria: "Is the organization's logging integrated with a Security Information and Event Management (SIEM) system?",
      policy: "16.10"
  },
  {
      policyDomain: "Network Security",
      assessmentCriteria: "Has the organization implemented network controls such as VLANs to safeguard information systems?",
      policy: "17.1"
  },
  {
      policyDomain: "Network Security",
      assessmentCriteria: "Are network connections to the organization's network restricted for enhanced security?",
      policy: "17.2"
  },
  {
      policyDomain: "Network Security",
      assessmentCriteria: "Are measures in place to protect public-facing networks with robust security measures?",
      policy: "17.3"
  },
  {
      policyDomain: "Network Security",
      assessmentCriteria: "Does the organization define and monitor network-related service levels?",
      policy: "17.4"
  },
  {
      policyDomain: "Network Security",
      assessmentCriteria: "Is Network Access Control (NAC) implemented to manage and restrict access based on device health and user identity?",
      policy: "17.5"
  },
  {
      policyDomain: "Network Security",
      assessmentCriteria: "Are Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) deployed to detect and respond to network threats?",
      policy: "17.6"
  },
  {
      policyDomain: "Network Security",
      assessmentCriteria: "Is network segmentation implemented to isolate critical assets and limit lateral movement in the event of a security breach?",
      policy: "17.7"
  },
  {
      policyDomain: "Network Security",
      assessmentCriteria: "Does the organization perform continuous network monitoring to promptly identify and respond to anomalous activities?",
      policy: "17.8"
  },
  {
      policyDomain: "Incident Management",
      assessmentCriteria: "Does the organization have comprehensive incident response procedures covering planning, preparation, and logging activities?",
      policy: "18.1"
  },
  {
      policyDomain: "Incident Management",
      assessmentCriteria: "Are procedures for monitoring, detecting, analyzing, and reporting information security events and incidents effective?",
      policy: "18.2"
  },
  {
      policyDomain: "Incident Management",
      assessmentCriteria: "Are individuals responsible for handling incidents competent and adequately trained?",
      policy: "18.3"
  },
  {
      policyDomain: "Incident Management",
      assessmentCriteria: "Is Root Cause Analysis (RCA) conducted for incidents to determine corrective and preventive actions?",
      policy: "18.4"
  },
  {
      policyDomain: "Incident Management",
      assessmentCriteria: "Are incident classification and prioritization guidelines systematically applied?",
      policy: "18.5"
  },
  {
      policyDomain: "Incident Management",
      assessmentCriteria: "Are continuous improvement mechanisms within incident response procedures regularly reviewed and updated based on lessons learned and emerging threats?",
      policy: "18.6"
  },
  {
      policyDomain: "Incident Management",
      assessmentCriteria: "Is there effective cross-functional collaboration during incident response?",
      policy: "18.7"
  },
  {
      policyDomain: "Incident Management",
      assessmentCriteria: "Are automated incident response tools used to enhance detection, containment, and remediation efficiency?",
      policy: "18.8"
  },
  {
      policyDomain: "Supplier and Vendor Management",
      assessmentCriteria: "Has the organization implemented a comprehensive supplier and vendor management policy?",
      policy: "19.1"
  },
  {
      policyDomain: "Supplier and Vendor Management",
      assessmentCriteria: "Are monitoring processes for suppliers actively maintained to identify and address potential risks?",
      policy: "19.2"
  },
  {
      policyDomain: "Supplier and Vendor Management",
      assessmentCriteria: "Are Service Level Agreements (SLAs) and Non-Disclosure Agreements (NDAs) established within supplier relationships?",
      policy: "19.3"
  },
  {
      policyDomain: "Supplier and Vendor Management",
      assessmentCriteria: "Are information security requirements included in agreements with suppliers?",
      policy: "19.4"
  },
  {
      policyDomain: "Supplier and Vendor Management",
      assessmentCriteria: "Are minimum information security requirements defined and implemented based on required access levels?",
      policy: "19.5"
  },
  {
      policyDomain: "Supplier and Vendor Management",
      assessmentCriteria: "Are third-party security assessments conducted to evaluate the security posture of key suppliers?",
      policy: "19.6"
  },
  {
      policyDomain: "Supplier and Vendor Management",
      assessmentCriteria: "Are mechanisms for continuous improvement in supplier security in place, including regular reviews and collaborative initiatives?",
      policy: "19.7"
  },
  {
      policyDomain: "Supplier and Vendor Management",
      assessmentCriteria: "Are processes effective in ensuring supplier compliance with information security requirements and standards?",
      policy: "19.8"
  },
  {
      policyDomain: "Business Continuity & Disaster Recovery Management",
      assessmentCriteria: "Is the Business Continuity Plan (BCP) adequate in addressing the continuity of information security and data protection?",
      policy: "20.1"
  },
  {
      policyDomain: "Business Continuity & Disaster Recovery Management",
      assessmentCriteria: "Are documented plans and recovery procedures approved, available, and aligned with information security requirements?",
      policy: "20.2"
  },
  {
      policyDomain: "Business Continuity & Disaster Recovery Management",
      assessmentCriteria: "Is the effectiveness of BCP testing verified during simulated disaster recovery scenarios?",
      policy: "20.3"
  },
  {
      policyDomain: "Business Continuity & Disaster Recovery Management",
      assessmentCriteria: "Are regular training programs for incident response personnel reviewed for adequacy and effectiveness?",
      policy: "20.4"
  },
  {
      policyDomain: "Business Continuity & Disaster Recovery Management",
      assessmentCriteria: "Does the organization consider cyber insurance as part of its risk management strategy, assessing coverage adequacy?",
      policy: "20.5"
  },
  {
      policyDomain: "Business Continuity & Disaster Recovery Management",
      assessmentCriteria: "Are collaborative exercises conducted to validate and improve the coordination and communication aspects of the Business Continuity and Disaster Recovery plans?",
      policy: "20.6"
  },
  {
      policyDomain: "Business Continuity & Disaster Recovery Management",
      assessmentCriteria: "Are continuous improvement mechanisms within the Business Continuity and Disaster Recovery plans regularly reviewed and updated?",
      policy: "20.7"
  },
  {
      policyDomain: "Business Continuity & Disaster Recovery Management",
      assessmentCriteria: "Are the organization's external dependencies assessed and documented in the Business Continuity and Disaster Recovery plans?",
      policy: "20.8"
  },
  {
      policyDomain: "Mobile Device Management (MDM) Policy",
      assessmentCriteria: "Is Mobile Device Management (MDM) software mandated on all company-issued mobile devices?",
      policy: "21.1"
  },
  {
      policyDomain: "Mobile Device Management (MDM) Policy",
      assessmentCriteria: "Is device encryption enabled on all company-issued mobile devices in compliance with industry standards?",
      policy: "21.2"
  },
  {
      policyDomain: "Mobile Device Management (MDM) Policy",
      assessmentCriteria: "Are remote wipe capabilities enabled on all company-issued mobile devices?",
      policy: "21.3"
  },
  {
      policyDomain: "Mobile Device Management (MDM) Policy",
      assessmentCriteria: "Is continuous monitoring and compliance of MDM software implemented on all company-issued mobile devices?",
      policy: "21.4"
  },
  {
      policyDomain: "Mobile Device Management (MDM) Policy",
      assessmentCriteria: "Are regular audits and assessments of MDM configurations and device compliance conducted?",
      policy: "21.5"
  },
  {
      policyDomain: "Mobile Device Management (MDM) Policy",
      assessmentCriteria: "Are MDM policies and procedures integrated with the organization's incident response plan?",
      policy: "21.6"
  },
  {
      policyDomain: "Mobile Device Management (MDM) Policy",
      assessmentCriteria: "Are procedures for timely updates and patches to MDM software in place?",
      policy: "21.7"
  },
  {
      policyDomain: "Protection of Customer Data",
      assessmentCriteria: "Is there a data privacy policy that establishes guidelines for the collection, use, and protection of personal information?",
      policy: "23.1"
  },
  {
      policyDomain: "Protection of Customer Data",
      assessmentCriteria: "Are security controls implemented to protect data from unauthorized access, use, disclosure, disruption, modification, or destruction?",
      policy: "23.2"
  },
  {
      policyDomain: "Protection of Customer Data",
      assessmentCriteria: "Are there specific timeframes and procedures outlined for the retention and safe disposal of customer data?",
      policy: "23.3"
  },
  {
      policyDomain: "Protection of Customer Data",
      assessmentCriteria: "Are access controls to customer data enforced to ensure it is accessible only to authorized personnel?",
      policy: "23.4"
  },
  {
      policyDomain: "Protection of Customer Data",
      assessmentCriteria: "Are procedures for responding to data breaches and security incidents well-defined?",
      policy: "23.5"
  },
  {
      policyDomain: "Protection of Customer Data",
      assessmentCriteria: "Is customer data encrypted during storage and transmission?",
      policy: "23.6"
  },
  {
      policyDomain: "Protection of Customer Data",
      assessmentCriteria: "Are risks managed when sharing customer data with third-party service providers and business partners?",
      policy: "23.7"
  },
  {
      policyDomain: "Protection of Customer Data",
      assessmentCriteria: "Is employee data protection training provided regularly?",
      policy: "23.8"
  },
  {
      policyDomain: "Protection of Customer Data",
      assessmentCriteria: "Are audit and compliance measures related to data protection ongoing?",
      policy: "23.9"
  },
  {
      policyDomain: "Protection of Customer Data",
      assessmentCriteria: "Is the accuracy and completeness of customer data maintained throughout its lifecycle?",
      policy: "23.10"
  },
  {
      policyDomain: "Training and Awareness",
      assessmentCriteria: "Is regular security awareness training provided for all employees?",
      policy: "24.1"
  },
  {
      policyDomain: "Training and Awareness",
      assessmentCriteria: "Are employees receiving role-specific training, especially for those handling sensitive information?",
      policy: "24.2"
  },
  {
      policyDomain: "Training and Awareness",
      assessmentCriteria: "Is compliance training provided based on regulatory and legal requirements relevant to employee duties?",
      policy: "24.3"
  },
  {
      policyDomain: "Training and Awareness",
      assessmentCriteria: "Is specialized training on recognizing and responding to phishing attempts provided?",
      policy: "24.4"
  },
  {
      policyDomain: "Training and Awareness",
      assessmentCriteria: "Is training on data protection and privacy provided for employees handling personal and sensitive information?",
      policy: "24.5"
  },
  {
      policyDomain: "Training and Awareness",
      assessmentCriteria: "Are employees trained on physical security protocols?",
      policy: "24.6"
  },
  {
      policyDomain: "Training and Awareness",
      assessmentCriteria: "Are employees instructed on cybersecurity best practices, such as the use of strong passwords and secure browsing habits?",
      policy: "24.7"
  },
  {
      policyDomain: "Training and Awareness",
      assessmentCriteria: "Are emergency response and evacuation training programs conducted?",
      policy: "24.8"
  },
  {
      policyDomain: "Training and Awareness",
      assessmentCriteria: "Is continuous learning and skill development for employees encouraged?",
      policy: "24.9"
  },
  {
      policyDomain: "Training and Awareness",
      assessmentCriteria: "Are training feedback and evaluation mechanisms in place to assess the effectiveness of training programs?",
      policy: "24.10"
  },
  {
      policyDomain: "Security Operations Center Policies",
      assessmentCriteria: "Is there a defined SOC governance policy that establishes the management and oversight of the SOC?",
      policy: "25.1"
  },
  {
      policyDomain: "Security Operations Center Policies",
      assessmentCriteria: "Does the SOC personnel policy address hiring, training, and continuous professional development?",
      policy: "25.2"
  },
  {
      policyDomain: "Security Operations Center Policies",
      assessmentCriteria: "Are SOC access control policies strictly controlled and monitored?",
      policy: "25.3"
  },
  {
      policyDomain: "Security Operations Center Policies",
      assessmentCriteria: "Are incident response and management procedures for the SOC clearly defined?",
      policy: "25.4"
  },
  {
      policyDomain: "Security Operations Center Policies",
      assessmentCriteria: "Does the SOC data privacy and protection policy ensure compliance with data protection and privacy requirements?",
      policy: "25.5"
  },
  {
      policyDomain: "Security Operations Center Policies",
      assessmentCriteria: "Are SOC communication protocols established for both internal and external communications?",
      policy: "25.6"
  },
  {
      policyDomain: "Security Operations Center Policies",
      assessmentCriteria: "Is there a threat intelligence policy guiding the collection, analysis, and dissemination of threat intelligence?",
      policy: "25.7"
  },
  {
      policyDomain: "Security Operations Center Policies",
      assessmentCriteria: "Are SOC monitoring and logging policies implemented for continuous surveillance of organizational assets?",
      policy: "25.8"
  },
  {
      policyDomain: "Security Operations Center Policies",
      assessmentCriteria: "Are SOC tool management policies governing the selection, deployment, and maintenance of security tools enforced?",
      policy: "25.9"
  },
  {
      policyDomain: "Security Operations Center Policies",
      assessmentCriteria: "Are SOC audit and compliance policies regularly reviewed to ensure adherence to industry standards?",
      policy: "25.10"
  },
  {
      policyDomain: "Security Operations Center Policies",
      assessmentCriteria: "Is a SOC continuous improvement policy in place to assess and enhance SOC operations regularly?",
      policy: "25.11"
  }
]
  },
  {
    category: "IT Organizations",
    policyDomain: "Information and Cyber Security Governance",
    checklists: [
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Does the organization have an appointed Information Security Officer (ISO) responsible for overseeing information and cyber security?",
          policy: "1.1"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Are the responsibilities of the ISO clearly defined and assigned within the organization?",
          policy: "1.2"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "In the absence of an ISO, is information and cyber security responsibility assigned to the Chief Information Officer (CIO) or the designated IT officer?",
          policy: "1.3"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Are information security audit responsibilities assigned to the (Chief) Information Auditor (IA) to ensure regular and thorough assessments?",
          policy: "1.4"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Has the organization established a committee responsible for making decisions on information and cyber security matters?",
          policy: "1.5"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Is there a separate committee dedicated to making decisions on information and cyber security risks?",
          policy: "1.6"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Are end-user responsibilities regarding information and cyber security clearly communicated and explained?",
          policy: "1.7"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Does the organization take proactive steps to develop the information security capacity of accountable individuals through training and awareness programs?",
          policy: "1.8"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Are background checks and security clearances conducted for officials dealing with 'Secret' or 'Confidential' information assets or having access to Critical National Information Infrastructure (CNII)?",
          policy: "1.9"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Is information security considered in the design and implementation of the organization’s functions, policies, strategies, or projects?",
          policy: "1.10"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Is there a budget allocated to support information security activities and initiatives?",
          policy: "1.11"
      },
      {
          policyDomain: "Information and Cyber Security Governance",
          assessmentCriteria: "Has the organization developed and implemented action plans to achieve its information security objectives, ensuring a systematic and measurable approach?",
          policy: "1.12"
      },
      {
          policyDomain: "Identifying Assets, Owners, Users, and Risks",
          assessmentCriteria: "Does the organization systematically identify information assets that hold value to the organization?",
          policy: "2.1"
      },
      {
          policyDomain: "Identifying Assets, Owners, Users, and Risks",
          assessmentCriteria: "Are risk assessments conducted to evaluate and quantify the risks associated with identified information assets?",
          policy: "2.2"
      },
      {
          policyDomain: "Identifying Assets, Owners, Users, and Risks",
          assessmentCriteria: "Is the value of information assets periodically reassessed to ensure alignment with organizational priorities and changes?",
          policy: "2.3"
      },
      {
          policyDomain: "Identifying Assets, Owners, Users, and Risks",
          assessmentCriteria: "Are risk assessments associated with information assets regularly reassessed and updated to address evolving threats and vulnerabilities?",
          policy: "2.4"
      },
      {
          policyDomain: "Identifying Assets, Owners, Users, and Risks",
          assessmentCriteria: "Are information assets classified based on sensitivity or other relevant criteria to establish appropriate protective measures?",
          policy: "2.5"
      },
      {
          policyDomain: "Identifying Assets, Owners, Users, and Risks",
          assessmentCriteria: "Does the organization maintain an IT Assets Register to record and track all IT assets within the organization?",
          policy: "2.6"
      },
      {
          policyDomain: "Identifying Assets, Owners, Users, and Risks",
          assessmentCriteria: "Are IT assets classified based on their criticality to the organization's operations and overall security posture?",
          policy: "2.7"
      },
      {
          policyDomain: "Identifying Assets, Owners, Users, and Risks",
          assessmentCriteria: "Are owners clearly identified and designated for each information and IT asset to ensure accountability and responsibility?",
          policy: "2.8"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Is sensitive information encrypted prior to storage to safeguard data integrity and confidentiality?",
          policy: "3.1"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Is sensitive information encrypted before transmission through electronic channels to prevent unauthorized access during transit?",
          policy: "3.2"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Is sensitive information only processed or stored in designated secure areas with appropriate physical and environmental controls?",
          policy: "3.3"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Are measures implemented to protect secure areas from fire, flood, humidity, and temperature to ensure the integrity and availability of stored information?",
          policy: "3.4"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Are protocols and controls in place to prevent unauthorized access to secure areas?",
          policy: "3.5"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Is sensitive information consistently processed or stored in secure areas to uphold security standards?",
          policy: "3.6"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Are appropriate measures adopted to protect secure areas from environmental risks such as fire, flood, humidity, and temperature?",
          policy: "3.7"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Are measures enforced to prevent unauthorized entry to secure areas?",
          policy: "3.8"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Is an Identity Management and Access Control Policy implemented to regulate access to information systems and assets?",
          policy: "3.9"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Are strong authentication methods utilized to enhance access security and protect against unauthorized access?",
          policy: "3.10"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Is compliance ensured with data sovereignty regulations and policies in the processing and storage of information?",
          policy: "3.11"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Is a thorough risk assessment conducted before obtaining cloud services to mitigate potential security risks?",
          policy: "3.12"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Are all operating systems used by the organization ensured to have valid licenses?",
          policy: "3.13"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Are organization operating systems regularly updated with the latest patches and fixes supplied by the vendor?",
          policy: "3.14"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Are procedures established to ensure the timely installation of critical patches supplied by vendors?",
          policy: "3.15"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Is antimalware software with valid licenses installed on all machines to protect against malicious software?",
          policy: "3.16"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Are users restricted from using personal emails for official communications to prevent security risks?",
          policy: "3.17"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Are email filters set up to detect and remove emails known to have malware attached?",
          policy: "3.18"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Is encryption utilized when sending sensitive information via email to maintain confidentiality?",
          policy: "3.19"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Are firewalls deployed within the computer network to control and monitor incoming and outgoing network traffic?",
          policy: "3.20"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Is secure Virtual Private Network (VPN) usage ensured for remote access to maintain secure communication?",
          policy: "3.21"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Do all users connecting remotely use VPN to maintain a secure connection?",
          policy: "3.22"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Are procedures established and adhered to for regularly backing up data to prevent data loss?",
          policy: "3.23"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Are backups stored at a fireproof, secure location physically distant from the data processing site?",
          policy: "3.24"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Are secure methods (e.g., shredding, punching, physically damaging, degaussing) followed for disposing of electronic media containing sensitive information?",
          policy: "3.25"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Is an internal information security audit program implemented to regularly assess and enhance security measures?",
          policy: "3.26"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Are Vulnerability Assessments and Penetration Testing (VAPTs) conducted through Sri Lanka CERT prior to any software application deployment?",
          policy: "3.27"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Is regular Vulnerability Assessments and Penetration Testing performed for the computer network?",
          policy: "3.28"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Are work-from-home guidelines issued by Sri Lanka CERT adhered to for a secure remote working environment?",
          policy: "3.29"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Is there a formal procedure for registering personal devices used within the organization?",
          policy: "3.30"
      },
      {
          policyDomain: "Protection of Information Assets",
          assessmentCriteria: "Are personal devices prohibited from processing or storing critical data to prevent security risks?",
          policy: "3.31"
      },
      {
          policyDomain: "Detection of Information Security Incidents",
          assessmentCriteria: "Are all staff instructed to promptly report any suspicious activity, contact, theft, virus, vulnerability, unauthorized access, tampering with files, or violation of security policy to the designated person in charge of Information Security?",
          policy: "4.1"
      },
      {
          policyDomain: "Detection of Information Security Incidents",
          assessmentCriteria: "Is the organization required to report cyber security incidents promptly to Sri Lanka CERT or any other relevant party as per established reporting procedures?",
          policy: "4.2"
      },
      {
          policyDomain: "Response to Information Security Incidents",
          assessmentCriteria: "Has the organization developed and maintained an Incident Response Plan outlining procedures to be followed in the event of information and cyber security incidents?",
          policy: "5.1"
      },
      {
          policyDomain: "Response to Information Security Incidents",
          assessmentCriteria: "In the event of an information and cyber security incident, is the Incident Response Plan promptly activated to minimize the impact on operations and restore normalcy?",
          policy: "5.2"
      },
      {
          policyDomain: "Response to Information Security Incidents",
          assessmentCriteria: "Does the organization have a comprehensive Disaster Recovery Plan developed to facilitate the recovery process in the event of a disaster or disruptive event?",
          policy: "5.3"
      },
      {
          policyDomain: "Response to Information Security Incidents",
          assessmentCriteria: "In the event of a disaster or any significant disruptive event, is the Disaster Recovery Plan promptly activated to restore disrupted services and ensure continuity of critical operations?",
          policy: "5.4"
      },
      {
          policyDomain: "Bring Your Own Device",
          assessmentCriteria: "Are acceptable use guidelines clearly defined for personal devices used for work purposes, outlining acceptable and prohibited activities, applications, and data handling practices?",
          policy: "6.1"
      },
      {
          policyDomain: "Bring Your Own Device",
          assessmentCriteria: "Are robust security measures, including password protection, encryption of sensitive data, and regular installation of security updates and patches, required on all BYOD devices?",
          policy: "6.2"
      },
      {
          policyDomain: "Bring Your Own Device",
          assessmentCriteria: "Is there a streamlined and easily accessible process for employees to report lost or stolen BYOD devices promptly to the IT department or designated authority?",
          policy: "6.3"
      },
      {
          policyDomain: "Bring Your Own Device",
          assessmentCriteria: "Is there a mandatory registration and enrollment process for BYOD devices accessing company resources, including the installation of necessary security software and configuration of security settings?",
          policy: "6.4"
      },
      {
          policyDomain: "Bring Your Own Device",
          assessmentCriteria: "Are Mobile Device Management (MDM) or similar solutions utilized to enable remote management and monitoring of BYOD devices, allowing for the enforcement of security policies, remote data wipes, and tracking of lost devices?",
          policy: "6.5"
      },
      {
          policyDomain: "Bring Your Own Device",
          assessmentCriteria: "Is the use of containerization or segregated workspaces encouraged on BYOD devices to separate personal and work-related data, ensuring the security and integrity of company information?",
          policy: "6.6"
      },
      {
          policyDomain: "Bring Your Own Device",
          assessmentCriteria: "Are employees using BYOD devices provided with ongoing security awareness training covering topics such as phishing awareness, safe browsing habits, and the importance of adhering to BYOD security policies?",
          policy: "6.7"
      },
      {
          policyDomain: "Bring Your Own Device",
          assessmentCriteria: "Are regular security assessments and audits conducted on BYOD devices and their associated security controls to identify and address any vulnerabilities or compliance issues?",
          policy: "6.8"
      },
      {
          policyDomain: "Access Control",
          assessmentCriteria: "Does the organization ensure each user has a unique identifier and uses strong authentication mechanisms for identity verification?",
          policy: "7.1"
      },
      {
          policyDomain: "Access Control",
          assessmentCriteria: "Is there an authorization policy in place that defines access conditions and adheres to the principles of least privilege and separation of duties?",
          policy: "7.2"
      },
      {
          policyDomain: "Access Control",
          assessmentCriteria: "Are there established procedures for access provisioning and de-provisioning to manage user access rights effectively?",
          policy: "7.3"
      },
      {
          policyDomain: "Access Control",
          assessmentCriteria: "Does your organization conduct periodic reviews and revalidations of user access rights to ensure they remain appropriate?",
          policy: "7.4"
      },
      {
          policyDomain: "Access Control",
          assessmentCriteria: "Are there measures in place to control physical access to secure areas within your organization?",
          policy: "7.5"
      },
      {
          policyDomain: "Access Control",
          assessmentCriteria: "Is remote access to organizational resources regulated and limited to secure methods and approved devices only?",
          policy: "7.6"
      },
      {
          policyDomain: "Access Control",
          assessmentCriteria: "Is there a requirement for immediate reporting of security incidents and a defined procedure for handling access control violations?",
          policy: "7.7"
      },
      {
          policyDomain: "Access Control",
          assessmentCriteria: "Does your organization provide ongoing training and promote security awareness among all users regarding access control policies?",
          policy: "7.8"
      },
      {
          policyDomain: "Access Control",
          assessmentCriteria: "Do your access control policies comply with all applicable legal and regulatory requirements, and are there established penalties for policy violations?",
          policy: "7.9"
      },
      {
          policyDomain: "IT Governance and Security Oversight",
          assessmentCriteria: "Is there a senior management representative appointed responsible for overseeing Information Security implementation and maintenance?",
          policy: "8.2"
      },
      {
          policyDomain: "IT Governance and Security Oversight",
          assessmentCriteria: "Are risk assessments regularly conducted to identify and prioritize IT security risks, guiding the development of security controls?",
          policy: "8.3"
      },
      {
          policyDomain: "IT Governance and Security Oversight",
          assessmentCriteria: "Is there an implementation of a continuous improvement process for Information Security, ensuring periodic assessments align with changes in the organization's IT environment and risk profile?",
          policy: "8.4"
      },
      {
          policyDomain: "IT Governance and Security Oversight",
          assessmentCriteria: "Are roles and responsibilities for IT security personnel clearly defined, covering the development, implementation, and maintenance of security controls?",
          policy: "8.5"
      },
      {
          policyDomain: "IT Governance and Security Oversight",
          assessmentCriteria: "Are necessary training and resources provided for IT security personnel, including Information Security training and access to required tools and technologies?",
          policy: "8.6"
      },
      {
          policyDomain: "IT Governance and Security Oversight",
          assessmentCriteria: "Are IT security personnel aware of the organization's IT security policies and procedures, facilitating informed decision-making for IT asset protection?",
          policy: "8.7"
      },
      {
          policyDomain: "IT Governance and Security Oversight",
          assessmentCriteria: "Is there a process established for reporting and investigating IT security incidents, ensuring prompt identification, investigation, and remediation?",
          policy: "8.8"
      },
      {
          policyDomain: "IT Governance and Security Oversight",
          assessmentCriteria: "Is there a continuous monitoring program in place to assess ongoing compliance with IT security policies, standards, and regulatory requirements?",
          policy: "8.9"
      },
      {
          policyDomain: "Password Management and Security",
          assessmentCriteria: "Has the organization established and enforced strong password policies?",
          policy: "9.1"
      },
      {
          policyDomain: "Password Management and Security",
          assessmentCriteria: "Do password policies include requirements such as length, complexity, and expiration?",
          policy: "9.2"
      },
      {
          policyDomain: "Password Management and Security",
          assessmentCriteria: "Is multi-factor authentication (MFA) implemented for required sensitive systems and data?",
          policy: "9.3"
      },
      {
          policyDomain: "Password Management and Security",
          assessmentCriteria: "Are password change requirements defined in terms of frequency and appropriateness?",
          policy: "9.4"
      },
      {
          policyDomain: "Password Management and Security",
          assessmentCriteria: "Do password complexity requirements align with industry best practices?",
          policy: "9.5"
      },
      {
          policyDomain: "Password Management and Security",
          assessmentCriteria: "Does the organization provide user awareness programs on password security?",
          policy: "9.6"
      },
      {
          policyDomain: "Password Management and Security",
          assessmentCriteria: "Do password management practices align with relevant regulatory requirements?",
          policy: "9.7"
      },
      {
          policyDomain: "Password Management and Security",
          assessmentCriteria: "Are stored passwords encrypted or masked in the databases?",
          policy: "9.8"
      },
      {
          policyDomain: "Password Management and Security",
          assessmentCriteria: "Does the organization implement adaptive authentication mechanisms that dynamically adjust security controls based on risk assessments and user behavior?",
          policy: "9.9"
      },
      {
          policyDomain: "Password Management and Security",
          assessmentCriteria: "Is there a well-defined and secure process for users to recover or reset their passwords, ensuring both security and user convenience?",
          policy: "9.10"
      },
      {
          policyDomain: "Password Management and Security",
          assessmentCriteria: "Does the organization employ monitoring and anomaly detection tools to identify suspicious or abnormal password-related activities?",
          policy: "9.11"
      },
      {
          policyDomain: "Password Management and Security",
          assessmentCriteria: "Are there periodic security awareness training sessions specifically focused on password security for all users?",
          policy: "9.12"
      },
      {
          policyDomain: "Password Management and Security",
          assessmentCriteria: "Is there a defined process for handling exceptions to the standard password policies, and is it consistently applied?",
          policy: "9.13"
      },
      {
          policyDomain: "Password Management and Security",
          assessmentCriteria: "Is there integration between the password management system and the broader Identity and Access Management (IAM) framework?",
          policy: "9.14"
      },
      {
          policyDomain: "Backup and Recovery Management",
          assessmentCriteria: "Has a policy for backup management been implemented within the organization?",
          policy: "10.1"
      },
      {
          policyDomain: "Backup and Recovery Management",
          assessmentCriteria: "Is backup restoration testing regularly performed to evaluate performance?",
          policy: "10.2"
      },
      {
          policyDomain: "Backup and Recovery Management",
          assessmentCriteria: "Are backups stored in a remote location and logged when sent?",
          policy: "10.3"
      },
      {
          policyDomain: "Backup and Recovery Management",
          assessmentCriteria: "Are automated backups reviewed weekly or as needed for sensitive data?",
          policy: "10.4"
      },
      {
          policyDomain: "Backup and Recovery Management",
          assessmentCriteria: "Is recovery data protected with encryption or data separation?",
          policy: "10.5"
      },
      {
          policyDomain: "Backup and Recovery Management",
          assessmentCriteria: "Is there maintenance of an isolated instance of recovery data using version control?",
          policy: "10.6"
      },
      {
          policyDomain: "Backup and Recovery Management",
          assessmentCriteria: "Is there a documented backup retention policy specifying the duration backups are retained, and are these policies consistently applied across different data types?",
          policy: "10.7"
      },
      {
          policyDomain: "Backup and Recovery Management",
          assessmentCriteria: "Does the organization leverage cloud-based backup solutions, and if so, are these solutions compliant with security and privacy standards?",
          policy: "10.8"
      },
      {
          policyDomain: "Backup and Recovery Management",
          assessmentCriteria: "Is there integration between the backup and incident response plans to ensure timely restoration in the event of a security incident or data loss?",
          policy: "10.9"
      },
      {
          policyDomain: "Backup and Recovery Management",
          assessmentCriteria: "Are monitoring tools in place to track the status of backup processes, and are alerts configured to notify relevant personnel in case of backup failures or anomalies?",
          policy: "10.10"
      },
      {
          policyDomain: "Backup and Recovery Management",
          assessmentCriteria: "Are backups configured in an immutable state, preventing unauthorized modifications or deletions?",
          policy: "10.11"
      },
      {
          policyDomain: "Backup and Recovery Management",
          assessmentCriteria: "Is there a versioning system in place for backups, facilitating the retrieval of specific data versions when needed?",
          policy: "10.12"
      },
      {
          policyDomain: "Backup and Recovery Management",
          assessmentCriteria: "Does the organization conduct continuous testing of backup and recovery processes to ensure resilience against evolving threats and changes in the IT environment?",
          policy: "10.13"
      },
      {
          policyDomain: "Vulnerability Management",
          assessmentCriteria: "Are Vulnerability Assessments and Penetration Tests (VAPT) conducted within the organization?",
          policy: "11.1"
      },
      {
          policyDomain: "Vulnerability Management",
          assessmentCriteria: "Are records of vulnerabilities and VAPTs maintained?",
          policy: "11.2"
      },
      {
          policyDomain: "Vulnerability Management",
          assessmentCriteria: "Is there an authorized end-user software list available?",
          policy: "11.3"
      },
      {
          policyDomain: "Vulnerability Management",
          assessmentCriteria: "Is VAPT performed periodically?",
          policy: "11.4"
      },
      {
          policyDomain: "Vulnerability Management",
          assessmentCriteria: "Has the organization taken necessary actions to address VAPT findings?",
          policy: "11.5"
      },
      {
          policyDomain: "Vulnerability Management",
          assessmentCriteria: "Is the vulnerability assessment process effective in identifying and prioritizing potential security risks?",
          policy: "11.6"
      },
      {
          policyDomain: "Vulnerability Management",
          assessmentCriteria: "Does the organization have a patch management process to address vulnerabilities promptly after identification?",
          policy: "11.7"
      },
      {
          policyDomain: "Vulnerability Management",
          assessmentCriteria: "Is vulnerability management integrated with configuration management processes to ensure consistency and accuracy in identifying vulnerabilities?",
          policy: "11.8"
      },
      {
          policyDomain: "Vulnerability Management",
          assessmentCriteria: "Does the organization collaborate with external sources to stay informed about emerging vulnerabilities relevant to its environment?",
          policy: "11.9"
      },
      {
          policyDomain: "Vulnerability Management",
          assessmentCriteria: "Are metrics and reporting mechanisms available for tracking the success of vulnerability management efforts?",
          policy: "11.10"
      },
      {
          policyDomain: "Vulnerability Management",
          assessmentCriteria: "Is there a documented timeline for remediating identified vulnerabilities, and is it consistently adhered to?",
          policy: "11.11"
      },
      {
          policyDomain: "Vulnerability Management",
          assessmentCriteria: "Does the vulnerability management process consider asset criticality when prioritizing remediation efforts?",
          policy: "11.12"
      },
      {
          policyDomain: "Vulnerability Management",
          assessmentCriteria: "Does the organization employ continuous monitoring mechanisms to identify and assess new vulnerabilities in a timely manner?",
          policy: "11.13"
      },
      {
          policyDomain: "Change Management",
          assessmentCriteria: "Has the organization implemented a formalized procedure for identifying, documenting, and approving all changes?",
          policy: "12.1"
      },
      {
          policyDomain: "Change Management",
          assessmentCriteria: "Do changes undergo meticulous planning and testing prior to implementation?",
          policy: "12.2"
      },
      {
          policyDomain: "Change Management",
          assessmentCriteria: "Is there a specific approach for evaluating the impact of changes?",
          policy: "12.3"
      },
      {
          policyDomain: "Change Management",
          assessmentCriteria: "Are thorough risk assessments conducted resulting from organizational changes?",
          policy: "12.4"
      },
      {
          policyDomain: "Change Management",
          assessmentCriteria: "Are measures implemented to effectively mitigate identified risks?",
          policy: "12.5"
      },
      {
          policyDomain: "Change Management",
          assessmentCriteria: "Are security controls reviewed and tested after changes are made?",
          policy: "12.6"
      },
      {
          policyDomain: "Change Management",
          assessmentCriteria: "Were post-implementation testing, security controls testing, and security audits performed to validate effectiveness?",
          policy: "12.7"
      },
      {
          policyDomain: "Change Management",
          assessmentCriteria: "Is change details effectively communicated to all relevant parties?",
          policy: "12.8"
      },
      {
          policyDomain: "Change Management",
          assessmentCriteria: "Is there a process in place to document changes comprehensively and facilitate knowledge transfer to relevant personnel?",
          policy: "12.9"
      },
      {
          policyDomain: "Change Management",
          assessmentCriteria: "Does the organization have a well-defined plan for rolling back changes in the event of unexpected issues, and is it tested periodically?",
          policy: "12.10"
      },
      {
          policyDomain: "Change Management",
          assessmentCriteria: "Does the organization leverage automated tools for change management?",
          policy: "12.11"
      },
      {
          policyDomain: "Change Management",
          assessmentCriteria: "Are there established metrics to measure the performance and effectiveness of the change management process?",
          policy: "12.12"
      },
      {
          policyDomain: "Change Management",
          assessmentCriteria: "Is the documentation related to changes easily accessible to authorized personnel, and is there a secure repository for change records?",
          policy: "12.13"
      },
      {
          policyDomain: "Secure Development",
          assessmentCriteria: "Has the organization implemented a secure development environment?",
          policy: "13.1"
      },
      {
          policyDomain: "Secure Development",
          assessmentCriteria: "Is the secure development process being maintained?",
          policy: "13.2"
      },
      {
          policyDomain: "Secure Development",
          assessmentCriteria: "Are development environments segregated?",
          policy: "13.3"
      },
      {
          policyDomain: "Secure Development",
          assessmentCriteria: "Are access controls implemented to prevent unauthorized access to critical development environments?",
          policy: "13.4"
      },
      {
          policyDomain: "Secure Development",
          assessmentCriteria: "Are secure coding standards used, and are regular code reviews conducted?",
          policy: "13.5"
      },
      {
          policyDomain: "Secure Development",
          assessmentCriteria: "Is application penetration testing conducted?",
          policy: "13.6"
      },
      {
          policyDomain: "Secure Development",
          assessmentCriteria: "Are developers given training in application security concepts and secure coding practices?",
          policy: "13.7"
      },
      {
          policyDomain: "Secure Development",
          assessmentCriteria: "Is there a separation between production and non-production systems?",
          policy: "13.8"
      },
      {
          policyDomain: "Secure Development",
          assessmentCriteria: "Are standard hardening configuration templates used for application infrastructure?",
          policy: "13.9"
      },
      {
          policyDomain: "Secure Development",
          assessmentCriteria: "Are up-to-date and trusted third-party software components used?",
          policy: "13.10"
      },
      {
          policyDomain: "Secure Development",
          assessmentCriteria: "Do policies address a secure environment in the development lifecycle?",
          policy: "13.11"
      },
      {
          policyDomain: "Secure Development",
          assessmentCriteria: "Are DevSecOps principles integrated into the software development lifecycle?",
          policy: "13.12"
      },
      {
          policyDomain: "Secure Development",
          assessmentCriteria: "Are there specific guidelines and controls in place for secure API development?",
          policy: "13.13"
      },
      {
          policyDomain: "Secure Development",
          assessmentCriteria: "Is there integration between software development processes and incident response plans?",
          policy: "13.14"
      },
      {
          policyDomain: "Secure Development",
          assessmentCriteria: "Is threat modeling employed during the design phase to identify and mitigate potential security threats and vulnerabilities?",
          policy: "13.15"
      },
      {
          policyDomain: "Secure Development",
          assessmentCriteria: "Do developers receive ongoing and up-to-date security training?",
          policy: "13.16"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Does the organization maintain an up-to-date inventory of all hardware and software assets?",
          policy: "14.1"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Is the inventory accurate and complete, including critical details such as version numbers and dependencies?",
          policy: "14.2"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Has the organization established effective processes for prioritizing patches based on the criticality of vulnerabilities and potential business impact?",
          policy: "14.3"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Does the organization maintain a testing environment that mirrors the production environment for validating patches?",
          policy: "14.4"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Is there a streamlined process for applying critical patches in emergency situations?",
          policy: "14.5"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Has the organization implemented automated tools for deploying patches?",
          policy: "14.6"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Does the organization maintain detailed records of applied patches, including dates, versions, and any encountered issues?",
          policy: "14.7"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Is there integration between the patch management process and the organization's change management system?",
          policy: "14.8"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Is communication with vendors effective to stay informed about upcoming patches, known vulnerabilities, and recommended mitigation strategies?",
          policy: "14.9"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Does the organization have a documented plan for rolling back patches in the event of unexpected issues, and is it periodically tested?",
          policy: "14.10"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Are reporting and metrics related to patch management available and effective?",
          policy: "14.11"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Is the patch management process integrated with endpoint security solutions?",
          policy: "14.12"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Does the organization maintain an up-to-date inventory of all hardware and software assets?",
          policy: "15.1"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Is the inventory accurate and complete, including critical details such as version numbers and dependencies?",
          policy: "15.2"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Has the organization established effective processes for prioritizing patches based on the criticality of vulnerabilities and potential business impact?",
          policy: "15.3"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Does the organization maintain a testing environment that mirrors the production environment for validating patches?",
          policy: "15.4"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Is there a streamlined process for applying critical patches in emergency situations?",
          policy: "15.5"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Has the organization implemented automated tools for deploying patches?",
          policy: "15.6"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Does the organization maintain detailed records of applied patches, including dates, versions, and any encountered issues?",
          policy: "15.7"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Is there integration between the patch management process and the organization's change management system?",
          policy: "15.8"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Is communication with vendors effective to stay informed about upcoming patches, known vulnerabilities, and recommended mitigation strategies?",
          policy: "15.9"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Does the organization have a documented plan for rolling back patches in the event of unexpected issues, and is it periodically tested?",
          policy: "15.10"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Are reporting and metrics related to patch management available and effective?",
          policy: "15.11"
      },
      {
          policyDomain: "Patch Management",
          assessmentCriteria: "Is the patch management process integrated with endpoint security solutions?",
          policy: "15.12"
      },
      {
          policyDomain: "Physical and Environmental Security",
          assessmentCriteria: "Are access control mechanisms used on doors with logging?",
          policy: "16.1"
      },
      {
          policyDomain: "Physical and Environmental Security",
          assessmentCriteria: "Are entry restrictions enforced for sensitive zones, with security cameras for added surveillance?",
          policy: "16.2"
      },
      {
          policyDomain: "Physical and Environmental Security",
          assessmentCriteria: "Is equipment resilience against hazards, such as fire, flood, and earthquake, maintained and tested regularly?",
          policy: "16.3"
      },
      {
          policyDomain: "Physical and Environmental Security",
          assessmentCriteria: "Is access to the data center restricted, and are cameras used for monitoring?",
          policy: "16.4"
      },
      {
          policyDomain: "Physical and Environmental Security",
          assessmentCriteria: "Are unauthorized devices effectively blocked by users in restricted areas, such as the data center?",
          policy: "16.5"
      },
      {
          policyDomain: "Physical and Environmental Security",
          assessmentCriteria: "Are access limitations, guards, and CCTV monitoring employed in sensitive areas?",
          policy: "16.6"
      },
      {
          policyDomain: "Physical and Environmental Security",
          assessmentCriteria: "Are security controls in place for server rooms, including access restrictions and monitoring?",
          policy: "16.7"
      },
      {
          policyDomain: "Physical and Environmental Security",
          assessmentCriteria: "Are biometric access controls used for sensitive areas?",
          policy: "16.8"
      },
      {
          policyDomain: "Physical and Environmental Security",
          assessmentCriteria: "Are physical intrusion detection systems, such as motion sensors or alarms, implemented?",
          policy: "16.9"
      },
      {
          policyDomain: "Physical and Environmental Security",
          assessmentCriteria: "Are environmental controls regularly tested for effectiveness and reliability?",
          policy: "16.10"
      },
      {
          policyDomain: "Physical and Environmental Security",
          assessmentCriteria: "Are procedures in place for secure disposal of sensitive materials and equipment?",
          policy: "16.11"
      },
      {
          policyDomain: "Physical and Environmental Security",
          assessmentCriteria: "Does the organization have an emergency response plan for physical security incidents?",
          policy: "16.12"
      },
      {
          policyDomain: "Log Management",
          assessmentCriteria: "Does the organization have a documented policy for comprehensive event logging, including explicit definitions of event types?",
          policy: "17.1"
      },
      {
          policyDomain: "Log Management",
          assessmentCriteria: "Is there a comprehensive inventory covering all systems, applications, and network components generating log events?",
          policy: "17.2"
      },
      {
          policyDomain: "Log Management",
          assessmentCriteria: "Are administrator and operator activities systematically logged, with regular reviews to detect unauthorized or suspicious actions?",
          policy: "17.3"
      },
      {
          policyDomain: "Log Management",
          assessmentCriteria: "Does the organization retain event logs for an adequate period?",
          policy: "17.4"
      },
      {
          policyDomain: "Log Management",
          assessmentCriteria: "Is real-time log generation implemented, along with continuous monitoring and mechanisms for automatic alerts during critical events?",
          policy: "17.5"
      },
      {
          policyDomain: "Log Management",
          assessmentCriteria: "Are procedures in place for regularly backing up logs, protecting them from unauthorized access, and adhering to encryption standards?",
          policy: "17.6"
      },
      {
          policyDomain: "Log Management",
          assessmentCriteria: "Does the organization adhere to a policy for clock synchronization across critical systems and applications?",
          policy: "17.7"
      },
      {
          policyDomain: "Log Management",
          assessmentCriteria: "Are procedures in place for verifying the integrity of logs to ensure they have not been tampered with or altered?",
          policy: "17.8"
      },
      {
          policyDomain: "Log Management",
          assessmentCriteria: "Does the organization log user activities, particularly interactions with sensitive data and critical systems?",
          policy: "17.9"
      },
      {
          policyDomain: "Log Management",
          assessmentCriteria: "Is the log retention policy periodically reviewed and updated to align with changing regulatory requirements and organizational needs?",
          policy: "17.10"
      },
      {
          policyDomain: "Log Management",
          assessmentCriteria: "Does the organization integrate logs with a Security Information and Event Management (SIEM) system for centralized log analysis and correlation?",
          policy: "17.11"
      },
      {
          policyDomain: "Log Management",
          assessmentCriteria: "Do personnel responsible for log analysis receive regular training to enhance their skills in identifying patterns, anomalies, and potential security incidents from log data?",
          policy: "17.12"
      },
      {
          policyDomain: "Network Security",
          assessmentCriteria: "Are network controls, such as VLANs, implemented to safeguard information systems?",
          policy: "18.1"
      },
      {
          policyDomain: "Network Security",
          assessmentCriteria: "Is the organization's practice to restrict connections to the network for enhanced security?",
          policy: "18.2"
      },
      {
          policyDomain: "Network Security",
          assessmentCriteria: "Are measures in place to protect public-facing networks, ensuring robust security measures?",
          policy: "18.3"
      },
      {
          policyDomain: "Network Security",
          assessmentCriteria: "Does the organization define and monitor network-related service levels?",
          policy: "18.4"
      },
      {
          policyDomain: "Network Security",
          assessmentCriteria: "Does the organization practice defining and monitoring network-related service levels?",
          policy: "18.5"
      },
      {
          policyDomain: "Network Security",
          assessmentCriteria: "Are Network Access Control (NAC) mechanisms implemented to manage and restrict access based on device health and user identity?",
          policy: "18.6"
      },
      {
          policyDomain: "Network Security",
          assessmentCriteria: "Are Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) deployed to detect and respond to network threats?",
          policy: "18.7"
      },
      {
          policyDomain: "Network Security",
          assessmentCriteria: "Is network segmentation implemented to isolate critical assets and limit lateral movement in the event of a security breach?",
          policy: "18.8"
      },
      {
          policyDomain: "Network Security",
          assessmentCriteria: "Does the organization have the capability for continuous network monitoring to promptly identify and respond to anomalous activities?",
          policy: "18.9"
      },
      {
          policyDomain: "Capacity Management",
          assessmentCriteria: "Are monitoring and capacity projections conducted for all hardware resources, utilities, software, and personnel?",
          policy: "19.1"
      },
      {
          policyDomain: "Capacity Management",
          assessmentCriteria: "Are capacity requirements identified for all systems, considering their business criticality?",
          policy: "19.2"
      },
      {
          policyDomain: "Capacity Management",
          assessmentCriteria: "Is continuous monitoring and tuning of resources consistently performed to maintain the required system performance?",
          policy: "19.3"
      },
      {
          policyDomain: "Capacity Management",
          assessmentCriteria: "Does the organization have detective controls in place to indicate problems in a timely manner?",
          policy: "19.4"
      },
      {
          policyDomain: "Capacity Management",
          assessmentCriteria: "Are scalability assessment processes in place to ensure systems can handle increased loads and demands?",
          policy: "19.5"
      },
      {
          policyDomain: "Capacity Management",
          assessmentCriteria: "Has the organization conducted a business impact analysis related to capacity management, identifying potential impacts on critical business processes?",
          policy: "19.6"
      },
      {
          policyDomain: "Capacity Management",
          assessmentCriteria: "Are there strategies in place for optimizing resource usage, including dynamic resource allocation and de-allocation based on demand?",
          policy: "19.7"
      },
      {
          policyDomain: "Capacity Management",
          assessmentCriteria: "Does the organization maintain comprehensive capacity planning documentation covering hardware, software, and personnel, and is it regularly updated?",
          policy: "19.8"
      },
      {
          policyDomain: "Incident Management",
          assessmentCriteria: "Does the organization have comprehensive incident response procedures covering planning, preparation, and logging activities?",
          policy: "20.1"
      },
      {
          policyDomain: "Incident Management",
          assessmentCriteria: "Are procedures in place for monitoring, detecting, analyzing, and reporting information security events and incidents?",
          policy: "20.2"
      },
      {
          policyDomain: "Incident Management",
          assessmentCriteria: "Are individuals responsible for handling incidents competent and adequately trained?",
          policy: "20.3"
      },
      {
          policyDomain: "Incident Management",
          assessmentCriteria: "Is Root Cause Analysis (RCA) conducted for incidents to determine corrective and preventive actions?",
          policy: "20.4"
      },
      {
          policyDomain: "Incident Management",
          assessmentCriteria: "Are guidelines in place for incident classification and prioritization?",
          policy: "20.5"
      },
      {
          policyDomain: "Incident Management",
          assessmentCriteria: "Does the organization have mechanisms for continuous improvement within incident response procedures?",
          policy: "20.6"
      },
      {
          policyDomain: "Incident Management",
          assessmentCriteria: "Is there effective cross-functional collaboration during incident response?",
          policy: "20.7"
      },
      {
          policyDomain: "Incident Management",
          assessmentCriteria: "Does the organization use automated incident response tools to enhance efficiency and speed?",
          policy: "20.8"
      },
      {
          policyDomain: "Supplier and Vendor Management",
          assessmentCriteria: "Has the organization implemented a comprehensive supplier and vendor management policy, outlining key processes and responsibilities?",
          policy: "21.1"
      },
      {
          policyDomain: "Supplier and Vendor Management",
          assessmentCriteria: "Are there monitoring processes in place for suppliers, ensuring active oversight to identify and address potential risks?",
          policy: "21.2"
      },
      {
          policyDomain: "Supplier and Vendor Management",
          assessmentCriteria: "Have Service Level Agreements (SLA) and Non-Disclosure Agreements (NDA) been established within supplier relationships, aligning with information security objectives?",
          policy: "21.3"
      },
      {
          policyDomain: "Supplier and Vendor Management",
          assessmentCriteria: "Are information security requirements included in supplier agreements, covering incident handling processes, screening requirements, and adherence to industry best practices?",
          policy: "21.4"
      },
      {
          policyDomain: "Supplier and Vendor Management",
          assessmentCriteria: "Have minimum information security requirements been defined and implemented based on required access levels?",
          policy: "21.5"
      },
      {
          policyDomain: "Supplier and Vendor Management",
          assessmentCriteria: "Have third-party security assessments been conducted to assess the resilience and information security posture of key suppliers?",
          policy: "21.6"
      },
      {
          policyDomain: "Supplier and Vendor Management",
          assessmentCriteria: "Are there mechanisms for continuous improvement in supplier security, such as regular reviews and collaborative initiatives?",
          policy: "21.7"
      },
      {
          policyDomain: "Supplier and Vendor Management",
          assessmentCriteria: "Are processes in place to ensure supplier compliance with information security requirements, legal obligations, and industry standards?",
          policy: "21.8"
      },
      {
          policyDomain: "Business Continuity & Disaster Recovery Management",
          assessmentCriteria: "Is the Business Continuity Plan (BCP) in place and adequately addressing the continuity of information security, including data protection and incident response?",
          policy: "22.1"
      },
      {
          policyDomain: "Business Continuity & Disaster Recovery Management",
          assessmentCriteria: "Are incident response personnel assessed to ensure they possess the necessary responsibility, authority, and competence to manage incidents during business disruptions?",
          policy: "22.2"
      },
      {
          policyDomain: "Business Continuity & Disaster Recovery Management",
          assessmentCriteria: "Have documented plans and recovery procedures been reviewed and approved, ensuring their availability and alignment with information security requirements?",
          policy: "22.3"
      },
      {
          policyDomain: "Business Continuity & Disaster Recovery Management",
          assessmentCriteria: "Is BCP testing conducted, and are the effectiveness of information security controls evaluated during simulated disaster recovery scenarios?",
          policy: "22.4"
      },
      {
          policyDomain: "Business Continuity & Disaster Recovery Management",
          assessmentCriteria: "Are there regular training programs for incident response personnel to ensure adequacy and effectiveness in responding to security incidents during disruptions?",
          policy: "22.5"
      },
      {
          policyDomain: "Business Continuity & Disaster Recovery Management",
          assessmentCriteria: "Does the organization consider cyber insurance (First-party/Third-party) as part of its risk management strategy, assessing coverage adequacy and alignment with information security objectives?",
          policy: "22.6"
      },
      {
          policyDomain: "Business Continuity & Disaster Recovery Management",
          assessmentCriteria: "Are collaborative exercises conducted with relevant stakeholders to validate and improve the coordination and communication aspects of the Business Continuity and Disaster Recovery plans?",
          policy: "22.7"
      },
      {
          policyDomain: "Business Continuity & Disaster Recovery Management",
          assessmentCriteria: "Are there continuous improvement mechanisms within the Business Continuity and Disaster Recovery plans, with regular reviews and updates based on lessons learned and emerging threats?",
          policy: "22.8"
      },
      {
          policyDomain: "Business Continuity & Disaster Recovery Management",
          assessmentCriteria: "Has the organization assessed and documented its external dependencies, including third-party services, and incorporated them into the Business Continuity and Disaster Recovery plans?",
          policy: "22.9"
      },
      {
          policyDomain: "Mobile Device Management (MDM) Policy",
          assessmentCriteria: "Does your organization mandate the use of Mobile Device Management software on all company-issued mobile devices?",
          policy: "23.1"
      },
      {
          policyDomain: "Mobile Device Management (MDM) Policy",
          assessmentCriteria: "Is device encryption enabled on all company-issued mobile devices in compliance with industry standards?",
          policy: "23.2"
      },
      {
          policyDomain: "Mobile Device Management (MDM) Policy",
          assessmentCriteria: "Are remote wipe capabilities enabled on all company-issued mobile devices to allow data erasure in case of loss or theft?",
          policy: "23.3"
      },
      {
          policyDomain: "Mobile Device Management (MDM) Policy",
          assessmentCriteria: "Is there continuous monitoring of MDM software to ensure compliance with security policies on all mobile devices?",
          policy: "23.4"
      },
      {
          policyDomain: "Mobile Device Management (MDM) Policy",
          assessmentCriteria: "Does your organization provide comprehensive training on MDM policies and software usage to all employees?",
          policy: "23.5"
      },
      {
          policyDomain: "Mobile Device Management (MDM) Policy",
          assessmentCriteria: "Are regular audits conducted to assess MDM configurations and compliance on mobile devices?",
          policy: "23.6"
      },
      {
          policyDomain: "Mobile Device Management (MDM) Policy",
          assessmentCriteria: "Are MDM policies integrated with your organization's incident response plan?",
          policy: "23.7"
      },
      {
          policyDomain: "Mobile Device Management (MDM) Policy",
          assessmentCriteria: "Does your organization ensure timely updates and patches to MDM software to address vulnerabilities?",
          policy: "23.8"
      },
      {
          policyDomain: "Secure Payment Policies",
          assessmentCriteria: "Does your payment gateway use strong encryption for data both at rest and in transit?",
          policy: "24.1"
      },
      {
          policyDomain: "Secure Payment Policies",
          assessmentCriteria: "Does your payment gateway comply with PCI DSS and other applicable regulatory standards?",
          policy: "24.2"
      },
      {
          policyDomain: "Secure Payment Policies",
          assessmentCriteria: "Are strict access controls and authentication measures, including multi-factor authentication, in place for accessing payment gateway systems?",
          policy: "24.3"
      },
      {
          policyDomain: "Secure Payment Policies",
          assessmentCriteria: "Is continuous monitoring and logging of transactions through the payment gateway enforced?",
          policy: "24.4"
      },
      {
          policyDomain: "Secure Payment Policies",
          assessmentCriteria: "Are advanced fraud detection technologies in place to prevent fraudulent transactions through your payment gateway?",
          policy: "24.5"
      },
      {
          policyDomain: "Secure Payment Policies",
          assessmentCriteria: "Does your payment gateway maintain data integrity throughout the transaction process?",
          policy: "24.6"
      },
      {
          policyDomain: "Secure Payment Policies",
          assessmentCriteria: "Is there a vendor management policy governing third-party interactions with the payment gateway?",
          policy: "24.7"
      },
      {
          policyDomain: "Secure Payment Policies",
          assessmentCriteria: "Are there established incident response protocols for security issues within the payment gateway ecosystem?",
          policy: "24.8"
      },
      {
          policyDomain: "Secure Payment Policies",
          assessmentCriteria: "Does your organization have a business continuity and disaster recovery plan for the payment gateway?",
          policy: "24.9"
      },
      {
          policyDomain: "Secure Payment Policies",
          assessmentCriteria: "Is there regular security training and awareness provided for employees involved with the payment gateway?",
          policy: "24.10"
      },
      {
          policyDomain: "Protection of Customer Data",
          assessmentCriteria: "Does your organization have a data privacy policy that complies with data protection laws and outlines rights of data subjects?",
          policy: "25.1"
      },
      {
          policyDomain: "Protection of Customer Data",
          assessmentCriteria: "Are security controls implemented to protect customer data from unauthorized access and threats?",
          policy: "25.2"
      },
      {
          policyDomain: "Protection of Customer Data",
          assessmentCriteria: "Is there a defined data retention and disposal policy specifying timeframes and methods for secure deletion?",
          policy: "25.3"
      },
      {
          policyDomain: "Protection of Customer Data",
          assessmentCriteria: "Does your access control policy limit data access to only those who require it for their job duties?",
          policy: "25.4"
      },
      {
          policyDomain: "Protection of Customer Data",
          assessmentCriteria: "Are there established procedures for incident response and breach notification for security incidents involving customer data?",
          policy: "25.5"
      },
      {
          policyDomain: "Protection of Customer Data",
          assessmentCriteria: "Is customer data encrypted during storage and transmission as per the data encryption policy?",
          policy: "25.6"
      },
      {
          policyDomain: "Protection of Customer Data",
          assessmentCriteria: "Are third-party data sharing and processing activities governed by strict policies and monitored regularly?",
          policy: "25.7"
      },
      {
          policyDomain: "Protection of Customer Data",
          assessmentCriteria: "Does your organization provide regular training to employees on their responsibilities towards customer data protection?",
          policy: "25.8"
      },
      {
          policyDomain: "Protection of Customer Data",
          assessmentCriteria: "Are regular audits conducted to ensure compliance with data protection policies and regulatory requirements?",
          policy: "25.9"
      },
      {
          policyDomain: "Protection of Customer Data",
          assessmentCriteria: "Are there measures in place to maintain the accuracy and integrity of customer data throughout its lifecycle?",
          policy: "25.10"
      }
  ]
  },
  // Add more categories and checklist items as needed
];

export default categoryChecklists;
