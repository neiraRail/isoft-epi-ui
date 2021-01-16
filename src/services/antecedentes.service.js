import ApiService from "@/services/api.service";
const url = "antecedentes";
export const service = {
    getAll() {
        return ApiService.get(url, { id: "" });
    },
    get(id) {
        return ApiService.get(url+"/buscar", { id: id });
    },
    create(params) {
        return ApiService.post(url, { params: params });
    },
    update(id, params) {
        return ApiService.update(url, { id: id, params: params });
    },
    destroy(id) {
        return ApiService.delete(url, { id: id });
    },
};
export default service;
