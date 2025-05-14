#!/usr/bin/env bash

set -euo pipefail
IFS=$'\n\t'

#####################################################################
#                                                                   #
# Script:  post_email_subject_to_exim_mta.sh                        #
#                                                                   #
# Purpose: A script that can be used to post an email               #
#          subject to 'datr-tech-web-api', which should             #
#          construct an email body and pass it to the               #
#          exim-mta container.                                      #
#                                                                   #
# Date:    14th May 2025                                            #
# Author:  datr.tech admin <admin@datr.tech>                        #
#                                                                   #
#####################################################################

curl -d '{"subject":"A test email subject"}' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:3090/datr-tech-web-api/api/v1/email
