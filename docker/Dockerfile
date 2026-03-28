FROM python:3.12-slim

RUN apt-get update && apt-get install -y \
    git \
    gcc \
    g++ \
    wget \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /archipelago

# Clone Archipelago
RUN git clone --depth 1 https://github.com/ArchipelagoMW/Archipelago.git .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Create directories
RUN mkdir -p players output

# Download custom apworld files
RUN wget -q -O worlds/sly2.apworld \
    https://github.com/NikolajDanger/APSly2/releases/download/v0.8.6/sly2.apworld

RUN wget -q -O worlds/sly3.apworld \
    https://github.com/NikolajDanger/ApSly3/releases/download/v0.1.2/sly3.apworld

RUN wget -q -O worlds/cod_bo3.apworld \
    https://github.com/colin969/bo3_archipelago/releases/download/0.3.0/cod_bo3.apworld

EXPOSE 38281

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
