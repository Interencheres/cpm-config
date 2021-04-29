FROM 776403767600.dkr.ecr.eu-west-1.amazonaws.com/cpm-docker-base-node:14.10.1_1

# Switch to root for setup
USER root

RUN mkdir -p /srv/cpm-config/

# Switch back to app user
USER app

WORKDIR /srv/cpm-config/
HEALTHCHECK --interval=5s --timeout=20s --retries=1 CMD test -f .ready

CMD [ "bash", "-c", "npm ci && touch .ready && sleep infinity" ]
