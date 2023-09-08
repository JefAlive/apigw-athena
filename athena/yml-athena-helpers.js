module.exports.database = async({ resolveVariable }) => {
    const reg = new RegExp(/[^a-zA-Z0-9]/g);
    const table = (await resolveVariable('self:service')).replace(reg, "");
    const stage = (await resolveVariable('sls:stage')).replace(reg, "");

    return {
        name: `${table}_${stage}`,
        table: `logs`
    }
};