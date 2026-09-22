---
title: "Account Takeover via Insecure Direct Object Reference (IDOR)"
shortDescription: "Flawed authorization checks in user profile update API allowed manipulating arbitrary tenant user records."
severity: "High"
mediumLink: "https://medium.com/@username/idor-account-takeover"
date: "2026-07-14"
---

# Account Takeover via Insecure Direct Object Reference (IDOR)

## Overview
Analysis of the profile synchronization service revealed missing object-level access controls, permitting parameter tampering to overwrite authentication credentials of secondary users.
