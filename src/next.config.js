// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                process: false,
            };
        }
        return config;
    },
};